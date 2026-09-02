import React, { ReactNode, useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: string;
}


const FlipLink: React.FC<FlipLinkProps> = ({ children }) => {

  const { handleScroll, data } = useContext(AppContext)

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      target="_blank"
      className="relative cursor-pointer hover:text-[#AC0E0F] my-6 w-fit block overflow-hidden whitespace-nowrap font-semibold md:text-[5vw] text-[13vw] dark:text-white/90"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;
