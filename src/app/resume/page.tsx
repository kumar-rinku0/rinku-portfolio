"use client";

import Balls from "@/components/Balls";
import {
  FaHtml5,
  FaJava,
  FaReact,
  FaJs,
  FaAward,
  FaCode,
  FaUserTie,
  FaCss3Alt,
} from "react-icons/fa";
import { FaGraduationCap, FaU } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiCplusplus,
  SiMongoose,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { RiUserHeartFill } from "react-icons/ri";
import { useState } from "react";

const experience = {
  title: "My Experience",
  description:
    "I am a fresher software developer and don't have much experience, but I have developed several projects and applications.",
  items: [
    {
      company: "Apna College",
      position: "Apprenticeship",
      duration: "Aug '24 - Persent",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "I have finished an alpha course at Apna College and computer engineering at CIITM College in Jaipur.",
  items: [
    {
      institute: "Apna College",
      degree: "Delta MERN Development",
      duration: "2024 - Persent",
    },
    {
      institute: "Apna College",
      degree: "Alpha DSA Course",
      duration: "2023 - 2024",
    },
    {
      institute: "Compucom College",
      degree: "Computer Engineering",
      duration: "2019 - 2024",
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
      name: "html 5",
    },
    {
      icon: <FaCss3Alt className="text-5xl" />,
      name: "css 3",
    },
    {
      icon: <FaJs className="text-5xl" />,
      name: "javascript",
    },
    {
      icon: <SiNextdotjs className="text-5xl" />,
      name: "next js",
    },
    {
      icon: <SiMongodb className="text-5xl" />,
      name: "mongodb",
    },
    {
      icon: <SiExpress className="text-5xl" />,
      name: "express",
    },
    {
      icon: <FaReact className="text-5xl" />,
      name: "react",
    },
    {
      icon: <SiNodedotjs className="text-5xl" />,
      name: "node js",
    },
    {
      icon: <SiTailwindcss className="text-5xl" />,
      name: "tailwind css",
    },
    {
      icon: <FaJava className="text-5xl" />,
      name: "java",
    },
    {
      icon: <SiCplusplus className="text-5xl" />,
      name: "c++",
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

let allTabs = [
  {
    id: "edu",
    name: "Education",
    icon: <FaGraduationCap className="text-2xl" />,
  },
  {
    id: "exp",
    name: "Exprience",
    icon: <FaAward className="text-2xl" />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <FaCode className="text-2xl" />,
  },
  {
    id: "about",
    name: "About",
    icon: <FaUserTie className="text-2xl" />,
  },
];

const Resume = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(0);
  return (
    <div className="min-h-[80vh] flex flex-col justify-start">
      <div className="flew-row relative top-8 mx-auto flex h-12 rounded-3xl border border-white/40 bg-primary px-2 backdrop-blur-sm">
        <span className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300">
          <span className="h-full w-full rounded-3xl bg-gray-800" />
        </span>
        {allTabs.map((tab, index) => {
          const isActive = activeTabIndex === index;
          return (
            <button
              key={index}
              className={`${
                isActive ? `bg-gray-500` : `hover:text-accent`
              } my-auto cursor-pointer select-none rounded-full px-4 py-2 text-center font-light text-white`}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.icon}
            </button>
          );
        })}
      </div>
      {activeTabIndex == 0 && (
        <div className="mt-16 container w-full xl:min-w-[1080px]">
          <h3 className="mb-4">{education.title}</h3>
          <p className="text-base leading-relaxed text-white/50">
            {education.description}
          </p>
          <ul className="max-h-[60vh] w-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
            {education.items.map((value, index) => {
              return (
                <li
                  key={index}
                  className="gap-4 p-4 bg-white/10 rounded-xl shadow-g"
                >
                  <h3 className="text-accent">{value.degree}</h3>
                  <div>{value.institute}</div>
                  <div>{value.duration}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {activeTabIndex == 1 && (
        <div className="mt-16 container">
          <h3 className="mb-4">{experience.title}</h3>
          <p className="text-base leading-relaxed text-white/50">
            {experience.description}
          </p>
          <ul className="max-h-[60vh] w-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
            {experience.items.map((value, index) => {
              return (
                <li
                  key={index}
                  className="gap-4 p-4 bg-white/10 rounded-xl shadow-g"
                >
                  <h3 className="text-accent">{value.position}</h3>
                  <div>{value.company}</div>
                  <div>{value.duration}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {activeTabIndex == 2 && (
        <div className="mt-16 container">
          <h3 className="mb-4">{skill.title}</h3>
          <p className="text-base leading-relaxed text-white/50">
            {skill.description}
          </p>
          <div className="max-h-[70vh] grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6">
            {skill.items.map((value, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Balls title={value.name} icon={value.icon} />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {activeTabIndex == 3 && (
        <div className="mt-16 container">
          <h3 className="mb-4">{about.title}</h3>
          <p className="text-base leading-relaxed text-white/50">
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
      )}
    </div>
  );
};

export default Resume;
