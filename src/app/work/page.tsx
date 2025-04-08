"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdPaperPlane } from "react-icons/io";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaJava,
  FaYoutube,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiTypescript,
  SiEjs,
  SiMongoose,
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";

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

const projects = [
  {
    num: "01",
    role: "lead developer",
    title: "Staff Management System",
    description:
      "A staff management system is a web application that allows you to manage your staff, including their personal information, attendance, and performance. It is built using the MERN stack and is designed to be user-friendly and efficient.",
    image:
      "https://cdn.jsdelivr.net/gh/kumar-rinku0/rinku-portfolio@1.0.3/public/img/7.png",
    stack: [
      { name: "ts", icon: <SiTypescript /> },
      { name: "next", icon: <SiNextdotjs /> },
      { name: "mongodb", icon: <SiMongoose /> },
      { name: "express", icon: <SiExpress /> },
      { name: "tailwind", icon: <SiTailwindcss /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/pay-insight.git",
        icon: <FaGithub />,
      },
      {
        name: "host",
        src: "https://pay-insight.vercel.app",
        icon: <IoMdPaperPlane />,
      },
    ],
  },
  {
    num: "02",
    role: "mern stack developer",
    title: "Listing Hub",
    description:
      "A Listing Hub is a web application that allows users to create, manage, and organize product or service listings. It provides features like customizable formats, search/filter capabilities, and category management, helping businesses or individuals efficiently showcase and track their offerings while enhancing visibility and user engagement.",
    image:
      "https://cdn.jsdelivr.net/gh/kumar-rinku0/rinku-portfolio@1.0.3/public/img/6.png",
    stack: [
      { name: "js", icon: <SiJavascript /> },
      { name: "react", icon: <SiReact /> },
      { name: "express", icon: <SiExpress /> },
      { name: "mongodb", icon: <SiMongoose /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/pay-insight.git",
        icon: <FaGithub />,
      },
      {
        name: "host",
        src: "https://pay-insight.vercel.app",
        icon: <IoMdPaperPlane />,
      },
    ],
  },
  {
    num: "03",
    role: "frontend developer",
    title: "inferno application",
    description:
      "A flawlessly dynamic, responsive, and well-designed mern application skeleton, constructed using typescript code that is understandable, manageable, dependable, and efficient.",
    image:
      "https://cdn.jsdelivr.net/gh/kumar-rinku0/rinku-portfolio@1.0.3/public/img/5.png",
    stack: [
      { name: "nextjs", icon: <SiNextdotjs /> },
      { name: "tailwind", icon: <SiTailwindcss /> },
      { name: "ts", icon: <SiTypescript /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/inferno.git",
        icon: <FaGithub />,
      },
      {
        name: "host",
        src: "https://infer-no.vercel.app",
        icon: <IoMdPaperPlane />,
      },
    ],
  },
  {
    num: "04",
    role: "frontend developer",
    title: "Call Toingg",
    description:
      "Web application based on service fees that offers a good communication service.",
    image:
      "https://cdn.jsdelivr.net/gh/kumar-rinku0/rinku-portfolio@1.0.3/public/img/4.png",
    stack: [
      { name: "nextjs", icon: <SiNextdotjs /> },
      { name: "tailwind", icon: <SiTailwindcss /> },
      { name: "ts", icon: <SiTypescript /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/project-04.git",
        icon: <FaGithub />,
      },
    ],
  },
  {
    num: "05",
    role: "mern stack developer",
    title: "luminous application",
    description:
      "A flawlessly responsive backend authentication and authorization system with well-designed models in a MERN (MongoDB, Express.js, React, Node.js) stack application.",
    image:
      "https://cdn.jsdelivr.net/gh/kumar-rinku0/rinku-portfolio@1.0.3/public/img/3.png",
    stack: [
      { name: "node", icon: <FaNodeJs /> },
      { name: "mongodb", icon: <SiMongoose /> },
      { name: "express", icon: <SiExpress /> },
      { name: "ejs", icon: <SiEjs /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/delta/tree/main/luminous",
        icon: <FaGithub />,
      },
      {
        name: "host",
        src: "https://luminous-beta.vercel.app",
        icon: <IoMdPaperPlane />,
      },
    ],
  },
  {
    num: "06",
    role: "frontend developer",
    title: "upcoming movies",
    description:
      "Responsive and well designed front end application fetch data from an API.",
    image:
      "https://cdn.jsdelivr.net/gh/kumar-rinku0/rinku-portfolio@1.0.3/public/img/2.png",
    stack: [
      { name: "js", icon: <SiJavascript /> },
      { name: "html", icon: <FaHtml5 /> },
      { name: "css", icon: <FaCss3 /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/upcoming-movies.git",
        icon: <FaGithub />,
      },
      {
        name: "youtube",
        src: "https://www.youtube.com/watch?v=wLilEGL0Cns",
        icon: <FaYoutube />,
      },
    ],
  },
  {
    num: "07",
    role: "java developer",
    title: "Currency Converter",
    description:
      "A desktop Java programme that allows you to select the desired money from any country. in particular making use of REST APIs and HashMap.",
    image:
      "https://cdn.jsdelivr.net/gh/kumar-rinku0/rinku-portfolio@1.0.3/public/img/1.png",
    stack: [
      { name: "java", icon: <FaJava /> },
      { name: "css", icon: <FaCss3 /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/CurrencyConverterFX.git",
        icon: <FaGithub />,
      },
    ],
  },
];

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
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-[40%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
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
          <div className="w-full xl:w-[60%] order-1 xl:order-none">
            <div className="xl:h-[520px] mb-12">
              <div className="h-[260px] sm:h-[460px] lg:h-[560px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20 shadow-g">
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
