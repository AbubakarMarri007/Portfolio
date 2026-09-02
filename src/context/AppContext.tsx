// context/AppContext.tsx
import { createContext, useState, useRef, ReactNode, useEffect, RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

type AppContextType = {
    isLoaderDone: boolean;
    setIsLoaderDone: React.Dispatch<React.SetStateAction<boolean>>;
    progress: number;
    setProgress: React.Dispatch<React.SetStateAction<number>>;
    loaderRef: React.RefObject<HTMLDivElement | null>;
    menuBarRef: React.RefObject<HTMLDivElement | null>;
    homeRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    projectRef: React.RefObject<HTMLDivElement | null>;
    skillsRef: React.RefObject<HTMLDivElement | null>;
    menuBarHandler: boolean;
    setmenuBarHandler: React.Dispatch<React.SetStateAction<boolean>>;
    handleScroll: (id: string) => void;
    data: MenuItem[];
};

const defaultState: AppContextType = {
    isLoaderDone: false,
    setIsLoaderDone: () => { },
    menuBarHandler: false,
    setmenuBarHandler: () => { },
    progress: 0,
    setProgress: () => { },
    loaderRef: { current: null },
    homeRef: { current: null },
    projectRef: { current: null },
    menuBarRef: { current: null },
    skillsRef: { current: null },
    aboutRef: { current: null },
    handleScroll: (id: string) => { },
    data: [],
};



export const AppContext = createContext<AppContextType>(defaultState);

type Props = { children: ReactNode };

type MenuItem = {
    title: string;
    link: string;
    num: string;
    id: number;
};

export const AppProvider = ({ children }: Props) => {
    const [isLoaderDone, setIsLoaderDone] = useState(false);
    const [progress, setProgress] = useState(0);
    const [menuBarHandler, setmenuBarHandler] = useState(false)
    const loaderRef = useRef<HTMLDivElement | null>(null);
    const menuBarRef = useRef<HTMLDivElement | null>(null);
    const homeRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const projectRef = useRef<HTMLDivElement | null>(null);
    let targetRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;
            });
        }, 450);
    }, []);

    useGSAP(() => {
        if (progress === 100) {
            gsap.to(loaderRef.current, {
                y: "-100%",
                duration: 1,
                delay: 0.2,
                ease: "power4.inOut",
            });
        }
    }, [progress]);

    useGSAP(() => {
        if (!menuBarRef.current) return;
        if (menuBarHandler) {
            gsap.to(menuBarRef.current, {
                y: 0,
                pointerEvents: "auto",
                duration: 1,
                ease: "power4.inOut",
            });
            gsap.to(homeRef.current, {
                opacity: 1,
                pointerEvents: "auto",
                duration: 1,
                ease: "power4.inOut",
            });
        } else {
            gsap.to(menuBarRef.current, {
                y: "100%",
                pointerEvents: "none",
                duration: 1,
                ease: "power4.inOut",
            });
            gsap.to(homeRef.current, {
                opacity: 0,
                pointerEvents: "auto",
                duration: 1,
                ease: "power4.inOut",
            });
        }
    }, [menuBarHandler]);

    useEffect(() => {
        if (progress >= 90 && !isLoaderDone) {
            setIsLoaderDone(true);
        }
    }, [progress, isLoaderDone]);


    const data: MenuItem[] = [
        { title: "HOME", link: "home", num: "01", id: 1 },
        { title: "ABOUT", link: "about", num: "02", id: 2 },
        { title: "SKILLS", link: "skills", num: "03", id: 3 },
        { title: "PR✳JECTS", link: "project", num: "04", id: 4 },
    ];

    const handleScroll = (id: string) => {
        switch (id) {
            case "home":
                targetRef = homeRef;
                break;
            case "about":
                targetRef = aboutRef;
                break;
            case "project":
                targetRef = projectRef;
                break;
            case "skills":
                targetRef = skillsRef;
                break;
        }

        setmenuBarHandler(false)
        setTimeout(() => {
            if (targetRef?.current) {
                targetRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }, 700);
    };

    return (
        <AppContext.Provider
            value={{
                isLoaderDone,
                setIsLoaderDone,
                progress,
                setProgress,
                loaderRef,
                menuBarRef,
                aboutRef,
                menuBarHandler,
                setmenuBarHandler,
                handleScroll,
                data,
                homeRef,
                projectRef,
                skillsRef,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
