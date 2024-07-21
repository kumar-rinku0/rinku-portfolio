"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const defaultAnimation = {
    hidden : {
        opacity: 0,
        x: "-100vw",
    },
    visible : {
        opacity: 1,
        x: 0,
        transition: {duration:1, type:"spring" ,ease: "easeIn" }
    }
}

const PageTransition = ({ children }: any) => {
    const pathname = usePathname();
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                variants={defaultAnimation}
                initial={"hidden"}
                animate={"visible"}
                exit={{opacity:0, x:"100vw", transition:{duration:0.4, type:"spring",}}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
