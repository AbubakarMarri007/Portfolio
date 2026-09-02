import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
    children: ReactNode;
    delay?: number;
};

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
