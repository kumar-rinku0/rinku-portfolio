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
    FaLink,
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
    SiFramer,
} from "react-icons/si";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Divide } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
        categroy: "Web Application",
        title: "Upcoming Movies",
        description:
            "A flawlessly dynamic, responsive, and well-designed website or application, constructed using javascript code that is understandable, manageable, dependable, and efficient.",
        image: "/img/2.png",
        stack: [
            { name: "html", icon: <FaHtml5 /> },
            { name: "css", icon: <FaCss3 /> },
            { name: "js", icon: <SiJavascript /> },
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
        num: "02",
        categroy: "MERN application",
        title: "Blogs At All",
        description:
            "With this blog software, you can read and leave comments on other people's blogs in addition to writing your own and tagging your friends in them.",
        image: "/img/3.png",
        stack: [
            { name: "ejs", icon: <SiEjs /> },
            { name: "node", icon: <FaNodeJs /> },
            { name: "mongoose", icon: <SiMongoose /> },
            { name: "express", icon: <SiExpress /> },
        ],
        link: [
            {
                name: "github",
                src: "https://github.com/kumar-rinku0/",
                icon: <FaGithub />,
            },
        ],
    },
    {
        num: "03",
        categroy: "Desktop Application",
        title: "Currency Converter",
        description:
            "A desktop Java programme that allows you to select the desired money from any country. in particular making use of REST APIs and HashMap.",
        image: "/img/4.png",
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
    {
        num: "04",
        categroy: "Web Application",
        title: "Call Toingg",
        description:
            "Web application based on service fees that offers a good communication service.",
        image: "/img/1.png",
        stack: [
            { name: "nextjs", icon: <SiNextdotjs /> },
            { name: "tailwind", icon: <SiTailwindcss /> },
            { name: "ts", icon: <SiTypescript /> },
        ],
        link: [
            {
                name: "github",
                src: "https://github.com/kumar-rinku0/",
                icon: <FaGithub />,
            },
        ],
    },
    {
        num: "05",
        categroy: "Portfolio Website",
        title: "rinku's portfolio",
        description: "Responsive and well designed full stack application.",
        image: "/img/5.png",
        stack: [
            { name: "nextjs", icon: <SiNextdotjs /> },
            { name: "tailwind", icon: <SiTailwindcss /> },
            { name: "ts", icon: <SiTypescript /> },
            { name: "frammer", icon: <SiFramer /> },
        ],
        link: [
            {
                name: "github",
                src: "https://github.com/kumar-rinku0/rinku-portfolio.git",
                icon: <FaGithub />,
            },
            {
                name: "host",
                src: "https://rinku-portfolio-one.vercel.app/",
                icon: <IoMdPaperPlane />,
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-8">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-6">
                            {/* {project number} */}
                            <div className="text-8xl leading-none text-transparent text-outline font-extrabold">
                                {project.num}
                            </div>
                            {/* {project categroy} */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.categroy}
                            </h2>
                            {/* {project title} */}
                            <h3 className="text-accent">{project.title}</h3>
                            {/* {project description} */}
                            <p className="text-white/60">
                                {project.description}
                            </p>
                            {/* {project icons or tech names} */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="text-xl text-accent"
                                        >
                                            {item.name}
                                            {index !==
                                                project.stack.length - 1 && ","}
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
                                        <div
                                            key={index}
                                            className="w-14 h-14 rounded-full border border-accent flex justify-center items-center hover:text-primary hover:bg-accent cursor-pointer"
                                        >
                                            <Link
                                                href={item.src}
                                                className="text-2xl"
                                            >
                                                {item.icon}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[60%] order-1 xl:order-none">
                        <div className="xl:h-[520px] mb-12">
                            <div className="h-[260px] sm:h-96 lg:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
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
                                            onDragEnd={(
                                                e,
                                                { offset, velocity }
                                            ) => {
                                                const swipe = swipePower(
                                                    offset.x,
                                                    velocity.x
                                                );

                                                if (
                                                    swipe <
                                                    -swipeConfidenceThreshold
                                                ) {
                                                    paginate(1);
                                                } else if (
                                                    swipe >
                                                    swipeConfidenceThreshold
                                                ) {
                                                    paginate(-1);
                                                }
                                            }}
                                            className="w-full h-full object-cover selection:not-sr-only"
                                            src={project.image}
                                            alt=""
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
        </motion.div>
    );
};

export default Work;
