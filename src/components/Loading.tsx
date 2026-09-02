import { AppContext, AppProvider } from "../context/AppContext";
import { motion } from 'framer-motion';
import { useContext } from 'react';

function Loading() {

  const images = ["exoape.webp", "arock.webp", "cineFlix.webp", "refokus.webp"];

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  const { progress, loaderRef } = useContext(AppContext)

  return (
    <div ref={loaderRef}
      style={{ fontFamily: "Saira, sans-serif" }}
      className='h-screen fixed left-0 top-0 z-50 text-white w-full bg-black'>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="h-1 bg-white absolute top-0 left-0"
      ></motion.div>
      <h1 className='absolute top-10 leading-none right-10 md:text-[14vw] text-[22vw]'>{progress}%</h1>
    </div>
  )
}

export default Loading