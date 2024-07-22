"use client";

import Image from "next/image"
import { motion } from "framer-motion"


const Photo = () => {
  return (
    <motion.div className="w-full h-full relative mix-blend-lighten">
      <motion.div
      initial={{opacity:0, scale:0}}
      animate={{
        opacity: 1,
        scale: 1,
        transition:{type:"spring", stiffness:120, damping:10, delay:1, duration:0.4, ease:"easeIn"}
      }}
      >
        <div className="h-[298px] w-[298px] xl:h-[498px] xl:w-[498px] relative">
          <Image src={`/luffy.png`} priority quality={100} fill alt="" sizes="auto" className="object-contain"></Image>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Photo