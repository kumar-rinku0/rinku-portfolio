"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { FaHtml5, FaJava, FaReact, FaJs } from "react-icons/fa";
import {
    SiTailwindcss,
    SiNextdotjs,
    SiReact,
    SiCplusplus,
    SiMongoose,
    SiNodedotjs,
} from "react-icons/si";

const experience = {
    title: "My Experience",
    description:
        "I am a fresher software developer and don't have much experience, but I have developed several projects and applications.",
    items: [
        {
            company: "Traine Intern",
            position: "Code Alpha",
            duration: "ONLY - 3 Months",
        },
    ],
};

const education = {
    title: "My Education",
    description:
        "I have finished an alpha course at Apna College and computer engineering at Ciitm College in Jaipur.",
    items: [
        {
            institute: "Apna College",
            degree: "Alpha Course",
            duration: "2023 - 2024",
        },
        {
            institute: "Compucom College",
            degree: "Computer Engineering",
            duration: "2019 - 2023",
        },
    ],
};

const skill = {
    title: "My Skills",
    description:
        "I think there is always more to learn because I have learned a number of technologies and I'm not done yet.",
    items: [
        {
            icon: <FaHtml5 className="text-5xl" />,
            name: "html",
        },
        {
            icon: <FaJava className="text-5xl" />,
            name: "java",
        },
        {
            icon: <FaReact className="text-5xl" />,
            name: "react",
        },
        {
            icon: <SiTailwindcss className="text-5xl" />,
            name: "tailwind css",
        },
        {
            icon: <SiNextdotjs className="text-5xl" />,
            name: "next js",
        },
        {
            icon: <SiCplusplus className="text-5xl" />,
            name: "c++",
        },
        {
            icon: <FaJs className="text-5xl" />,
            name: "javascript",
        },
        {
            icon: <SiNodedotjs className="text-5xl" />,
            name: "node js",
        },
    ],
};

const about = {
    title: "About MySelf",
    description:
        "If you've already visited the website's homepage, then you already know that I'm a software engineer. If you require my help with development, I would be delighted to collaborate with you.",
    info: [
        {
            fieldname: "Name",
            fieldvalue: "Rinku Kumar",
        },
        {
            fieldname: "Phone",
            fieldvalue: "(+91) 9783 943 969",
        },
        {
            fieldname: "Email",
            fieldvalue: "kumar.rinku0@outlook.com",
        },
        {
            fieldname: "Nationality",
            fieldvalue: "Indian",
        },
        {
            fieldname: "Address",
            fieldvalue: "Jawahar Nagar, Jaipur",
        },
    ],
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 2, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
        >
            <div className="container mx-auto max-w-[1080px]">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col justify-center items-center gap-16"
                >
                    <div className="w-full flex justify-center md:justify-start">
                        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-fit gap-4 mx:auto">
                            <TabsTrigger value="experience">
                                {" "}
                                Experience{" "}
                            </TabsTrigger>
                            <TabsTrigger value="education">
                                Education
                            </TabsTrigger>
                            <TabsTrigger value="skills"> Skills </TabsTrigger>
                            <TabsTrigger value="about"> About </TabsTrigger>
                        </TabsList>
                    </div>
                    <div className="min-h-[70vh]">
                        <TabsContent
                            value="experience"
                            className="w-full xl:min-w-[1040px]"
                        >
                            <div>
                                <h3 className="mb-4">{experience.title}</h3>
                                <p className="text-sm text-white/50">
                                    {experience.description}
                                </p>
                                <ul className="max-h-[60vh] w-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
                                    {experience.items.map((value, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="gap-4 p-4 bg-white/10 rounded-xl"
                                            >
                                                <h3 className="text-accent">
                                                    {value.position}
                                                </h3>
                                                <div>{value.company}</div>
                                                <div>{value.duration}</div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="education"
                            className="w-full xl:min-w-[1040px]"
                        >
                            <div>
                                <h3 className="mb-4">{education.title}</h3>
                                <p className="text-sm text-white/50">
                                    {education.description}
                                </p>
                                <ul className="max-h-[60vh] w-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
                                    {education.items.map((value, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="gap-4 p-4 bg-white/10 rounded-xl"
                                            >
                                                <h3 className="text-accent">
                                                    {value.degree}
                                                </h3>
                                                <div>{value.institute}</div>
                                                <div>{value.duration}</div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="skills"
                            className="w-full xl:min-w-[1040px]"
                        >
                            <div>
                                <h3 className="mb-4">{skill.title}</h3>
                                <p className="text-sm text-white/50">
                                    {skill.description}
                                </p>
                                <div className="max-h-[60vh] grid grid-cols-3 md:grid-cols-4">
                                    {skill.items.map((value, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="w-full h-full flex items-center justify-center gap-8 mt-16"
                                            >
                                                <motion.div
                                                    drag
                                                    dragElastic={0.5}
                                                    dragConstraints={{left:0, right:0, top:0, bottom:0}}
                                                    whileDrag={{scaleX:1.2}}
                                                    dragMomentum={false}
                                                    dragTransition={{bounceStiffness: 600, bounceDamping: 10}}
                                                    title={value.name}
                                                    className="w-20 h-20 flex justify-center items-center rounded-full bg-gray-800 text-accent "
                                                >
                                                    {value.icon}
                                                </motion.div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="about"
                            className="w-full xl:min-w-[1040px]"
                        >
                            <div>
                                <h3 className="mb-4">{about.title}</h3>
                                <p className="text-sm text-white/50">
                                    {about.description}
                                </p>
                                <div className="flex flex-col justify-center items-start mt-16">
                                    {about.info.map((value, index) => {
                                        return (
                                            <div key={index}>
                                                <span>{value.fieldname}</span> :{" "}
                                                <span>{value.fieldvalue}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
