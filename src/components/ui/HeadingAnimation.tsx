import { motion } from "framer-motion";
import { ReactNode } from "react";

type HeadingAnimationProps = {
    children: ReactNode;
    diraction?: string
};

const HeadingAnimationProps = ({ children, diraction = "left" }: HeadingAnimationProps) => {
    return (
        <div className="mb-12 h-fit uppercase overflow-hidden">
            <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ fontFamily: "Saira, sans-serif" }}
                className={`md:text-[8vw] ${diraction === "right" && "text-right"} md:leading-[7vw] text-[15vw] leading-[14vw] font-medium`}
            >
                {children}
            </motion.h2>
        </div>
    );
};

export default HeadingAnimationProps;