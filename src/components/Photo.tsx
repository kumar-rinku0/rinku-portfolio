"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative mix-blend-lighten">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 10,
            delay: 1,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        <div className="min-h-[298px] min-w-[298px] h-80 w-80 xl:h-[498px] xl:w-[498px] relative">
          <Image
            src={`/luffy.png`}
            alt=""
            priority
            quality={100}
            width={498}
            height={498}
            className="hidden xl:block xl:object-contain"
          />
          <Image
            src={`/luffy.png`}
            alt=""
            priority
            quality={100}
            width={298}
            height={298}
            className="block xl:hidden object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
