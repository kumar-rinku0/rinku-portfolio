"use client";

import React from "react";
import { motion } from "framer-motion";

const Balls = ({title, icon} : {title:string, icon:React.ReactNode}) => {
    return (
        <motion.div
            drag
            dragElastic={0.5}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileDrag={{ scaleX: 1.2 }}
            dragMomentum={false}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            title={title}
            className="w-20 h-20 flex justify-center items-center rounded-full bg-gray-800 text-accent "
        >
            {icon}
        </motion.div>
    );
};

export default Balls;
