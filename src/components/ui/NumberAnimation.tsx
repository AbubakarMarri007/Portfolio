import { motion } from "framer-motion";

type NumberAnimationProps = {
    children: React.ReactNode;
    direction?: "left" | "right";
    delay?: number
};

const NumberAnimation: React.FC<NumberAnimationProps> = ({ delay, children, direction = "left" }) => {
    const xValue = direction === "left" ? -30 : 30;

    return (
        <motion.div
            initial={{ opacity: 0, x: xValue }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: delay, duration: 1 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

export default NumberAnimation;
