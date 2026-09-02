import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

const DURATION = 0.5;
const STAGGER = 0.07;

interface AnimatedTextProps {
    children: ReactNode;
    start?: boolean;
}

export default function AnimatedText({ children, start = false }: AnimatedTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!start || !containerRef.current) return;

        const letters = containerRef.current.querySelectorAll(".letter");

        gsap.fromTo(
            letters,
            { y: "100%" },
            {
                y: "0%",
                delay: .9,
                duration: DURATION,
                stagger: STAGGER,
                ease: "power2.inOut",
            }
        );
    }, [start]);

    const wrapLetters = (node: ReactNode): ReactNode => {
        if (typeof node === "string") {
            return node.split("").map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                    <span className="letter inline-block">{char}</span>
                </span>
            ));
        }
        return node;
    };

    return (
        <div ref={containerRef}>
            {Array.isArray(children)
                ? children.map((child, i) => <span key={i}>{wrapLetters(child)}</span>)
                : wrapLetters(children)}
        </div>
    );
}
