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
  SiVite,
} from "react-icons/si";

export const projects = [
  {
    num: "01",
    role: "full stack developer",
    title: "PharmaCore – Centralized Pharmacy Management System",
    description:
      "A Pharmacy Centralized System Application is a digital platform designed to streamline and integrate pharmacy operations across multiple branches or locations. It enables centralized inventory management, prescription processing, patient records, supplier coordination, and real-time data synchronization. The system enhances efficiency, reduces errors, and ensures consistent pharmaceutical care across all connected sites.",
    image: "/img/pharmacy_app/1.png",
    stack: [
      { name: "ts", icon: <SiTypescript /> },
      { name: "vite", icon: <SiVite /> },
      { name: "mongodb", icon: <SiMongoose /> },
      { name: "tailwind", icon: <SiTailwindcss /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/apps-cod.git",
        icon: <FaGithub />,
      },
      {
        name: "host",
        src: "http://ph.8bit.co.in",
        icon: <IoMdPaperPlane />,
      },
    ],
  },
  {
    num: "02",
    role: "lead full stack developer",
    title: "FeastTrack – Track and Manage Your Catering Business",
    description:
      "A Catering Management System is a software solution designed to manage and streamline all aspects of catering operations. It handles order processing, menu planning, event scheduling, inventory tracking, staff coordination, and customer management. The system improves efficiency, enhances customer service, and ensures seamless execution of catering events from planning to delivery",
    image: "/img/cattring_app/1.png",
    stack: [
      { name: "ts", icon: <SiTypescript /> },
      { name: "vite", icon: <SiVite /> },
      { name: "mongodb", icon: <SiMongoose /> },
      { name: "tailwind", icon: <SiTailwindcss /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/apps-cod.git",
        icon: <FaGithub />,
      },
      {
        name: "host",
        src: "http://ct.8bit.co.in",
        icon: <IoMdPaperPlane />,
      },
    ],
  },
  {
    num: "03",
    role: "lead full stack developer",
    title:
      "ShiftMatrix – A Smart Workforce Platform for Efficient Staff Management",
    description:
      "A staff management system is a web application that allows you to manage your staff, including their personal information, attendance, and performance. It is built using the MERN stack and is designed to be user-friendly and efficient.",
    image: "/img/staff_app/1.png",
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
        src: "http://at.8bit.co.in",
        icon: <IoMdPaperPlane />,
      },
    ],
  },
  {
    num: "04",
    role: "mern stack developer",
    title: "ListingHub - A Comprehensive Listing Management Platform",
    description:
      "A Listing Hub is a web application that allows users to create, manage, and organize product or service listings. It provides features like customizable formats, search/filter capabilities, and category management, helping businesses or individuals efficiently showcase and track their offerings while enhancing visibility and user engagement.",
    image: "/img/sentinel_app/1.png",
    stack: [
      { name: "js", icon: <SiJavascript /> },
      { name: "react", icon: <SiReact /> },
      { name: "express", icon: <SiExpress /> },
      { name: "mongodb", icon: <SiMongoose /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/sentinel.git",
        icon: <FaGithub />,
      },
      {
        name: "host",
        src: "https://sentinel-hub.vercel.app",
        icon: <IoMdPaperPlane />,
      },
    ],
  },
  {
    num: "05",
    role: "frontend developer",
    title: "Inferno -  Project Management Application",
    description:
      "A flawlessly dynamic, responsive, and well-designed mern application skeleton, constructed using typescript code that is understandable, manageable, dependable, and efficient.",
    image: "/img/inferno_app/1.png",
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
    num: "06",
    role: "frontend developer",
    title: "Optimus-Ecom - E-commerce Platform",
    description:
      "Optimus-Ecom is a powerful and scalable e-commerce platform designed to help businesses build, manage, and grow their online stores. It offers a complete suite of tools for product management, secure payments, order tracking, customer engagement, and analytics. With a user-friendly interface and customizable features, Optimus-Ecom empowers businesses to deliver seamless shopping experiences across devices.",
    image: "/img/optimus_app/1.png",
    stack: [
      { name: "nextjs", icon: <SiNextdotjs /> },
      { name: "tailwind", icon: <SiTailwindcss /> },
      { name: "ts", icon: <SiTypescript /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/optimus.git",
        icon: <FaGithub />,
      },
      {
        name: "host",
        src: "https://optimus-ecom.vercel.app",
        icon: <IoMdPaperPlane />,
      },
    ],
  },
  {
    num: "07",
    role: "frontend developer",
    title: "Toingg - A Communication Service Platform",
    description:
      "Toingg is a dynamic communication service platform designed to streamline messaging, voice, and video interactions for individuals and businesses. It offers secure, real-time communication tools including chat, conferencing, file sharing, and collaboration features—all in one unified interface. With its scalable infrastructure and intuitive design, Toingg enhances connectivity, boosts productivity, and supports seamless communication across teams and devices.",
    image: "/img/toingg_app/1.png",
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
];
