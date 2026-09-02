import { circOut, motion } from "framer-motion";
import RedTextAnimation from "./ui/RedTextAnimation";

function Contact() {

  const parentVariants = {
    initial: {},
    hover: {},
  };

  const childVariants = {
    initial: { opacity: 0, scale: 0, height: 0, width: 0 },
    hover: {
      opacity: 1, scale: 1, height: "102%", width: "102%", transition: { duration: .5, ease: circOut }
    },
  }

  return (
    <div className="w-full md:px-10 border-black/20 py-10 px-5 my-20">
      <div className="flex items-center h-full md:justify-between flex-col md:flex-row">
        <div className="text-sm md:mr-0 mr-auto">
          <h2>Ready to <span className="text-[#AC0E0F]">build</span></h2>
          <div className="flex gap-2 h-fit">
            <h2>something? </h2>
            <img className="md:w-5 w-4" src="arrow-right-black.svg" />
          </div>
        </div>

        <div className="flex items-center justify-end md:gap-8 gap-10 md:justify-between w-full md:mt-0 mt-10 md:w-[75%]">
          <h1
            style={{ fontFamily: "Saira, sans-serif" }}
            className="md:text-[8vw] text-center leading-fit text-[10vw] font-medium"
          >
            <RedTextAnimation color="black">Contact Us</RedTextAnimation>
          </h1>
          <a
            href="https://wa.me/923378428820?text=Hi%2C%20I'm%20interested%20in%20your%20services!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div variants={parentVariants}
              initial="initial"
              whileHover="hover"
              className="sm:h-[7vw] relative h-15 sm:w-[7vw] w-15 flex items-center justify-center bg-[#AC0E0F] rounded-full">
              <img className="md:w-[2vw] w-5" src="right-arrow.svg" />
              <motion.div
                variants={childVariants}
                className="h-2 w-2 flex tracking-wider items-center justify-center font-semibold text-sm bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full">
                CLICK
              </motion.div>
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
