"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion"
import { Divide } from "lucide-react";
import { FaHtml5, FaJava, FaReact, FaJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiReact, SiCplusplus, SiMongoose, SiNodedotjs } from "react-icons/si"



const experience = {
  icon: "",
  title: "My Experience",
  description: "i am a fresher software developer don't have much experience but i have developer several project and application.",
  items: [
    {
      company: "Traine Intern",
      position: "Code Alpha",
      duration: "ONLY - 3 Months"
    },
  ]
}

const education = {
  icon: "",
  title: "My Education",
  description: "i have completed computer engineering from ciitm college, jaipur and alpha course from apna college.",
  items: [
    {
      institute: "Apna College",
      degree: "Alpha Course",
      duration: "2023 - 2024"
    },
    {
      institute: "Compucom College",
      degree: "Computer Engineering",
      duration: "2019 - 2023"
    },
  ]
}

const skill = {
  title: "My Skills",
  description: "i have learned several technologies and i'm not done yet, means i belive there is always more to learn.",
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
  ]
}

const about = {
  title: "About MySelf",
  description: "I'm a software developer as per told, if you already seen homepage of website. i would love to work with you if you need my assitance in development.",
  info: [
    {
      fieldname: "Name",
      fieldvalue: "Rinku Kumar"
    },
    {
      fieldname: "Phone",
      fieldvalue: "(+91) 9783 943 969"
    },
    {
      fieldname: "Email",
      fieldvalue: "officialkumar.rinku@gmail.com"
    },
    {
      fieldname: "Nationality",
      fieldvalue: "Indian"
    },
    {
      fieldname: "Address",
      fieldvalue: "Jawahar Nagar, Jaipur"
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 2, ease: "easeIn" } }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto max-w-[1080px]">
        <Tabs
          defaultValue="experience"
          className="flex flex-col justify-center items-center gap-16"
        >
          <div className="w-full flex justify-center md:justify-start">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-fit gap-4 mx:auto" >
              <TabsTrigger value="experience"> Experience </TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills"> Skills </TabsTrigger>
              <TabsTrigger value="about"> About </TabsTrigger>
            </TabsList>
          </div>
          <div
            className="min-h-[70vh]">
            <TabsContent value="experience" className="w-full xl:min-w-[1040px]">
              <div>
                <h3 className="mb-4">{experience.title}</h3>
                <p className="text-sm text-white/50">{experience.description}</p>
                <ul className="max-h-[60vh] w-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
                  {experience.items.map((value, index) => {
                    return (<li key={index} className="gap-4 p-4 bg-white/10 rounded-xl">
                      <h3 className="text-accent">{value.position}</h3>
                      <div>{value.company}</div>
                      <div>{value.duration}</div>
                    </li>)
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full xl:min-w-[1040px]">
              <div>
                <h3 className="mb-4">{education.title}</h3>
                <p className="text-sm text-white/50">{education.description}</p>
                <ul className="max-h-[60vh] w-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
                  {education.items.map((value, index) => {
                    return (<li key={index} className="gap-4 p-4 bg-white/10 rounded-xl">
                      <h3 className="text-accent">{value.degree}</h3>
                      <div>{value.institute}</div>
                      <div>{value.duration}</div>
                    </li>)
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full xl:min-w-[1040px]">
              <div>
                <h3 className="mb-4">{skill.title}</h3>
                <p className="text-sm text-white/50">{skill.description}</p>
                <div className="max-h-[60vh] grid grid-cols-3 md:grid-cols-4">
                  {skill.items.map((value, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full h-full flex items-center justify-center gap-8 mt-16"
                      >
                        <div
                        title={value.name}
                        className="w-20 h-20 flex justify-center items-center rounded-full bg-primary border border-accent hover:bg-accent hover:text-primary"
                        >
                          {value.icon}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full xl:min-w-[1040px]">
              <div>
                <h3 className="mb-4">{about.title}</h3>
                <p className="text-sm text-white/50">{about.description}</p>
                <div className="flex flex-col justify-center items-start mt-16">
                  {about.info.map((value, index) => {
                    return (
                      <div key={index}><span>{value.fieldname}</span> : <span>{value.fieldvalue}</span></div>
                    )
                  })}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume