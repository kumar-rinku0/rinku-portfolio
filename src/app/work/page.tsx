"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";
import { projects } from "./projects";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    if (newDirection < 0 && page === 0) {
      setPage([projects.length - 1, newDirection]);
      setProject(projects[projects.length - 1]);
    } else if (newDirection > 0 && page === projects.length - 1) {
      setPage([0, newDirection]);
      setProject(projects[0]);
    } else {
      setPage([page + newDirection, newDirection]);
      setProject(projects[page + newDirection]);
    }
  };
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0">
      <div className="flex justify-center items-center w-full px-4 ">
        <div className="w-full flex flex-col xl:flex-row gap-8">
          <div className="w-full xl:w-[40%] h-fit flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-6">
              {/* {project number} */}
              <div className="text-6xl leading-none text-transparent text-outline font-extrabold">
                {project.num}
              </div>
              {/* {project title} */}
              <h3 className="text-3xl text-accent capitalize">
                {project.title}
              </h3>
              {/* {project role} */}
              <h6 className="text-[12px] font-bold leading-none self-end text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.role}
              </h6>
              {/* {project description} */}
              <p className="text-base leading-relaxed text-white/60">
                {project.description}
              </p>
              {/* {project icons or tech names} */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* {border} */}
              <div className="border border-white/20"></div>
              {/* {buttons or links} */}
              <div className="flex items-center gap-4">
                {project.link.map((item, index) => {
                  return (
                    <Link
                      href={item.src}
                      key={index}
                      prefetch={false}
                      scroll={false}
                      replace={false}
                      target="_blank"
                    >
                      <div className="text-2xl w-14 h-12 btn-outline border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800">
                        {item.icon}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full xl:w-[60%] order-1 xl:order-none">
            <div className="flex justify-center items-center xl:min-h-[520px]">
              <div className="min-h-[260px] sm:min-h-[460px] lg:min-h-[560px] xl:min-h-[460px] relative group flex justify-center items-center bg-pink-50/20 shadow-g">
                {/* {overlap} */}
                <div className="absolute top-0 bottom-0 h-full w-full bg-black/10"></div>
                {/* {img} */}
                <AnimatePresence>
                  <div className="w-full h-full relative outline-none overflow-hidden">
                    <motion.img
                      key={project.image}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: {
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        },
                        opacity: { duration: 0.2 },
                      }}
                      drag="x"
                      dragConstraints={{
                        left: 0,
                        right: 0,
                      }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                          paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                          paginate(-1);
                        }
                      }}
                      className="w-full h-full object-cover selection:not-sr-only shadow-b"
                      src={project.image}
                      alt=""
                      loading="lazy"
                      fetchPriority="high"
                    />
                    <button
                      className="text-accent absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 p-2 focus-visible:outline-none"
                      onClick={() => paginate(-1)}
                    >
                      <FaAngleLeft className="w-8 h-8" />
                    </button>
                    <button
                      className="text-accent absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 p-2 focus-visible:outline-none"
                      onClick={() => paginate(1)}
                    >
                      <FaAngleRight className="w-8 h-8" />
                    </button>
                  </div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
