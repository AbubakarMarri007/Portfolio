import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { useContext } from "react";
type NavPage = {
    setmenuBarHandler: React.Dispatch<React.SetStateAction<boolean>>
};

function Navbar({ setmenuBarHandler }: NavPage) {

    const { isLoaderDone } = useContext(AppContext)

    return (
        <>
            {isLoaderDone && <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="relative z-40 h-[90px] md:px-10 px-5 flex items-center w-full justify-between gap-5 md:mb-15 mb-7"
            >
                <div>
                    <img className="w-20" src="logo.svg" />
                </div>
                <button onClick={() => setmenuBarHandler(true)}
                    style={{ fontFamily: "Saira, sans-serif" }}
                    className="cursor-pointer text-sm"
                >
                    MENU
                </button>
            </motion.div>}
        </>
    );
}

export default Navbar;
