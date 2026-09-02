import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import HeadingAnimationProps from "./ui/HeadingAnimation";
import { motion } from "framer-motion";
import RedTextAnimation from "./ui/RedTextAnimation";
import FadeIn from "./ui/FadeIn";
import NumberAnimation from "./ui/NumberAnimation";

function Project() {

    const { projectRef } = useContext(AppContext)

    return (
        <div ref={projectRef} className="w-full md:px-10 px-5 mt-10 relative md:border-y-1 border-black/20">
            <div className="flex justify-between md:gap-10 md:flex-row flex-col">
                <div className="mt-20 flex flex-col justify-between">
                    <div className="flex items-center md:gap-15 gap-7">
                        <HeadingAnimationProps>PR<motion.span initial={{ scale: 0, rotate: 0 }} viewport={{ once: true }} whileInView={{ scale: 1, rotate: "90deg" }} transition={{ duration: .8 }} className="font-bold inline-block text-[#AC0E0F]">✳</motion.span>JECTS</HeadingAnimationProps>
                    </div>

                    <div className="md:pl-2 pl-1 flex items-start md:gap-3 gap-2 mt-10 flex-wrap">
                        <span className="inline-block h-[2px] sm:w-10 w-7 mt-2 bg-black"></span>
                        <h3 className="font-medium md:text-base text-sm">
                            A selection of my <RedTextAnimation>recent work</RedTextAnimation>  <br /> showcasing my skills in
                            front-end <br /> development and UI animations.
                        </h3>
                    </div>

                    <div className="relative mt-10 md:h-[300px] h-[250px] flex">
                        <motion.div
                            style={{ fontFamily: "Saira, sans-serif" }}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.2, x: 5, background: "#AC0E0F", rotate: "90deg" }}
                            transition={{
                                duration: 0.6,
                                ease: [0.68, -0.55, 0.27, 1.55]
                            }} className="md:h-[200px] text-center text-white h-[150px] z-20 md:w-[200px] cursor-pointer w-[150px] absolute md:-left-40 -left-30 top-1/2 -translate-y-1/2 bg-black rounded-full">
                            <span className="absolute top-5 left-1/2 text-base -translate-x-1/2 tracking-wider">Hello</span>
                        </motion.div>
                        <div className="md:h-[250px] h-[200px] md:w-[250px] cursor-pointer w-[200px] absolute md:-left-45 -left-35 top-1/2 -translate-y-1/2 border-3 border-[#AC0E0F] rounded-full"></div>
                    </div>

                    <div className="md:block hidden">
                        <div className="md:text-base text-xs md:mt-0 mb-5 tracking-wider md:leading-6 leading-5">
                            <FadeIn delay={0.4}>Here’s a selection of my recent projects
                                built with a focus on clean design and
                                interactive user experience. I love combining
                                smooth animations with responsive layouts using
                                tools like React, GSAP, and Tailwind CSS.</FadeIn>
                        </div>
                        <div className="md:text-base text-xs md:mt-0 tracking-wider md:leading-6 leading-5">
                            <FadeIn delay={0.6}>
                                Each project reflects my passion for front-end
                                development and bringing ideas to life.
                            </FadeIn>
                        </div>
                        <h1
                            style={{ fontFamily: "Saira, sans-serif" }}
                            className="stroke-text text-transparent font-bold mt-5 stroke-black opacity-40 text-[22vw] leading-fit md:text-[10vw]"
                        >
                            <NumberAnimation>04</NumberAnimation>
                        </h1>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="md:w-[20vw] w-[50vw] md:border-l-1 border-black/20">
                        <div className="mt-17">
                            <div className="flex pr-2 relative md:px-3 items-center justify-between mb-2">
                                <h2 className="font-medium text-sm">Exoape</h2>
                                <h2 className="md:text-[3vw] text-black/50 text-[8vw] leading-none font-semibold absolute right-2 md:bottom-0 bottom-1">01</h2>
                            </div>
                            <a href="https://exoape01clone.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="h-[250px] w-full object-center object-cover"
                                    src="exoape.webp"
                                />
                            </a>
                        </div>
                        <div className="mt-55 w-full">
                            <div className="pr-2 relative md:px-3 flex items-center justify-between mb-2">
                                <h2 className="font-medium text-sm">Refokus</h2>
                                <h2 className="md:text-[3vw] text-black/50 text-[8vw] leading-none font-semibold absolute right-2 md:bottom-0 bottom-1">03</h2>
                            </div>
                            <a href="https://abubakarkingsher.github.io/Refokus/" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="h-[250px] w-full object-center object-cover"
                                    src="refokus.webp"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[20vw] w-[50vw] md:border-x-1 border-black/20">
                        <div className="mt-79">
                            <div className="pl-2 relative md:px-3 flex items-center justify-between mb-2">
                                <h2 className="font-medium text-sm">Arock</h2>
                                <h2 className="md:text-[3vw] text-black/50 text-[8vw] leading-none font-semibold absolute right-2 md:bottom-0 bottom-1">02</h2>
                            </div>
                            <a href="https://arock-clone.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="h-[250px] w-full object-center object-cover"
                                    src="arock.webp"
                                />
                            </a>
                        </div>
                        <div className="mt-55">
                            <div className="pl-2 relative md:px-3 flex items-center justify-between mb-2">
                                <h2 className="font-medium text-sm">CineFlix</h2>
                                <h2 className="md:text-[3vw] text-black/50 text-[8vw] leading-none font-semibold absolute right-2 md:bottom-0 bottom-1">04</h2>
                            </div>
                            <a href="https://cinefilxpk.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="h-[250px] w-full object-center object-cover"
                                    src="cineFlix.webp"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:mt-20 mt-10 md:hidden block">
                    <div className="md:text-base text-xs md:mt-0 mb-5 tracking-wider md:leading-6 leading-5">
                        <FadeIn delay={0.4}>Here’s a selection of my recent projects
                            built with a focus on clean design and
                            interactive user experience. I love combining
                            smooth animations with responsive layouts using
                            tools like React, GSAP, and Tailwind CSS.</FadeIn>
                    </div>
                    <div className="md:text-base text-xs md:mt-0 tracking-wider md:leading-6 leading-5">
                        <FadeIn delay={0.6}>
                            Each project reflects my passion for front-end
                            development and bringing ideas to life.
                        </FadeIn>
                    </div>
                    <h1
                        style={{ fontFamily: "Saira, sans-serif" }}
                        className="stroke-text text-transparent mt-2 font-bold text-right stroke-black opacity-40 text-[22vw] leading-fit md:text-[10vw]"
                    >
                        <NumberAnimation>04</NumberAnimation>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Project;
