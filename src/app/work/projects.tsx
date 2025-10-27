import { IoMdPaperPlane } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongoose,
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiVite,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

export const projects = [
  {
    num: "01",
    role: "full stack developer",
    title: "Alpha Donate",
    description:
      "A donation collections platform that enables individuals and organizations to create fundraising campaigns, accept donations, and manage donor information efficiently. Built with the MERN stack, it offers a user-friendly interface, secure payment processing, and real-time tracking of donation progress.",
    image: "/img/donation_app/1.png",
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TS", icon: <SiTypescript /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/donation-a.git",
        icon: <FaGithub />,
      },
      {
        name: "host",
        src: "https://donate.rinkukumar.in",
        icon: <IoMdPaperPlane />,
      },
    ],
    video: {
      src: "https://www.youtube.com/embed/Oh_lFwZLZU0",
      title: "Alpha Donate - Donation Collection Platform",
    },
  },
  {
    num: "02",
    role: "full stack developer",
    title: "Messaging",
    description:
      "A real-time messaging application built with the MERN stack, enabling users to send and receive instant messages, create chat rooms, and manage contacts seamlessly. The app features a user-friendly interface, secure authentication, and efficient data handling to provide a smooth communication experience.",
    image: "/img/messaging_app/1.png",
    stack: [
      { name: "TS", icon: <SiTypescript /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "MongoDB", icon: <SiMongoose /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/messaging.git",
        icon: <FaGithub />,
      },
      {
        name: "host",
        src: "https://messaging-nine.vercel.app",
        icon: <IoMdPaperPlane />,
      },
    ],
    video: {
      src: "https://www.youtube.com/embed/zNh17PCMW9E",
      title:
        "Messaging - A Chatting Application with Responsive and Enchanted Design",
    },
  },
  {
    num: "03",
    role: "full stack developer",
    title: "Pay Insight - Staff Management System",
    description:
      "A staff management system is a web application that allows you to manage your staff, including their personal information, attendance, and performance. It is built using the MERN stack and is designed to be user-friendly and efficient.",
    image: "/img/staff_app/1.png",
    stack: [
      { name: "TS", icon: <SiTypescript /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "MongoDB", icon: <SiMongoose /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/pay-insight.git",
        icon: <FaGithub />,
      },
      {
        name: "host",
        src: "https://payinsight.rinkukumar.in",
        icon: <IoMdPaperPlane />,
      },
    ],
    video: {
      src: "https://www.youtube.com/embed/kTeZX5rvE9A",
      title: "Pay Insight - Staff Management System",
    },
  },
  {
    num: "04",
    role: "mern stack developer",
    title: "Sentinel - A Comprehensive Listing Management Platform",
    description:
      "Sentinel is a web application that allows users to create, manage, and organize product or service listings. It provides features like customizable formats, search/filter capabilities, and category management, helping businesses or individuals efficiently showcase and track their offerings while enhancing visibility and user engagement.",
    image: "/img/sentinel_app/1.png",
    stack: [
      { name: "JS", icon: <SiJavascript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongoose /> },
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
    video: {
      src: "https://www.youtube.com/embed/FAm5Yk1sJ0I",
      title: "Alpha Donate - Donation Management Platform",
    },
  },
  {
    num: "05",
    role: "frontend developer",
    title: "Inferno -  Project Management Application",
    description:
      "A flawlessly dynamic, responsive, and well-designed mern application skeleton, constructed using typescript code that is understandable, manageable, dependable, and efficient.",
    image: "/img/inferno_app/1.png",
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "TS", icon: <SiTypescript /> },
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
    video: {
      src: "https://www.youtube.com/embed/FAm5Yk1sJ0I",
      title: "Alpha Donate - Donation Management Platform",
    },
  },
  {
    num: "06",
    role: "frontend developer",
    title: "Optimus-Ecom - E-commerce Platform",
    description:
      "Optimus-Ecom is a powerful and scalable e-commerce platform designed to help businesses build, manage, and grow their online stores. It offers a complete suite of tools for product management, secure payments, order tracking, customer engagement, and analytics. With a user-friendly interface and customizable features, Optimus-Ecom empowers businesses to deliver seamless shopping experiences across devices.",
    image: "/img/optimus_app/1.png",
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "TS", icon: <SiTypescript /> },
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
    video: {
      src: "https://www.youtube.com/embed/FAm5Yk1sJ0I",
      title: "Alpha Donate - Donation Management Platform",
    },
  },
  {
    num: "07",
    role: "frontend developer",
    title: "Toingg - A Communication Service Platform",
    description:
      "Toingg is a dynamic communication service platform designed to streamline messaging, voice, and video interactions for individuals and businesses. It offers secure, real-time communication tools including chat, conferencing, file sharing, and collaboration features—all in one unified interface. With its scalable infrastructure and intuitive design, Toingg enhances connectivity, boosts productivity, and supports seamless communication across teams and devices.",
    image: "/img/toingg_app/1.png",
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "TS", icon: <SiTypescript /> },
    ],
    link: [
      {
        name: "github",
        src: "https://github.com/kumar-rinku0/project-04.git",
        icon: <FaGithub />,
      },
    ],
    video: {
      src: "https://www.youtube.com/embed/FAm5Yk1sJ0I",
      title: "Alpha Donate - Donation Management Platform",
    },
  },
];
