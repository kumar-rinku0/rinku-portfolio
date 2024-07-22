"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const defaultAnimation = {
    hidden: {
        opacity: 0,
        x: "-100vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, type: "spring", ease: "easeIn" },
    },
};

const Template = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                variants={defaultAnimation}
                initial={"hidden"}
                animate={"visible"}
                exit={{
                    opacity: 0,
                    x: "100vw",
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Template;
