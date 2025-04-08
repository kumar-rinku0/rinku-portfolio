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
            type: "just",
            delay: 1,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        <div className="h-[298px] w-[298px] xl:h-[498px] xl:w-[498px] relative">
          <Image
            src={`https://cdn.jsdelivr.net/gh/kumar-rinku0/rinku-portfolio@1.0.3/public/luffy.png`}
            alt=""
            priority
            quality={100}
            width={498}
            height={498}
            className="hidden xl:block xl:object-contain shadow-b"
            aria-hidden="true"
          />
          <Image
            src={`https://cdn.jsdelivr.net/gh/kumar-rinku0/rinku-portfolio@1.0.3/public/luffy.png`}
            alt=""
            priority
            quality={100}
            width={298}
            height={298}
            className="block xl:hidden object-contain shadow-b"
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
