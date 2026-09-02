import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface RedTextAnimationProps {
    children: ReactNode;
    className?: string;
    color?: string
}

const RedTextAnimation: React.FC<RedTextAnimationProps> = ({ children, className, color }) => {
    return (
        <motion.span
            initial={{ backgroundSize: "0% 100%", opacity: 0 }}
            whileInView={{ backgroundSize: "100% 100%", opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{
                backgroundImage: `linear-gradient(90deg, ${color === "black" ? "#000000, #000000" : "#AC0E0F, #AC0E0F"})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                backgroundRepeat: "no-repeat",
                margin: "0 5px"
            }}
            className={className}
        >
            {children}
        </motion.span>
    );
};

export default RedTextAnimation;
