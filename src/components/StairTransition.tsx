"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";



const StairTransition = () => {
    const pathname = usePathname();
    return (
        <>
        <AnimatePresence mode="wait"> 
            <div key={pathname}>
                <div
                className="w-screen h-screen top-0 left-0 right-0 fixed pointer-events-none z-40 flex"
                >
                    <Stairs />
                </div>
                <motion.div 
                    className="w-screen h-screen fixed bg-primary top-0 pointer-events-none"
                    initial={{opacity: 1}}
                    animate={{
                        opacity: 0,
                        transition: {delay: 1, duration: 0.4, ease: "easeInOut"}
                    }}
                />
            </div>
        </AnimatePresence>
        </>
    )
}

export default StairTransition