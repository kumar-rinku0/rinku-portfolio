"use client";

import Link from "next/link";
import {BsArrowDownRight} from "react-icons/bs"
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: "Web Developer",
    description: "I have already developed several web application on several technologies, you can browse them if you want.",
    href: "/contect",
  },
  {
    num: '02',
    title: "Node Developer",
    description: "i would love to work and colabrate on runing project as nodejs developer",
    href: "/contect",
  },
  {
    num: '03',
    title: "MERN Developer",
    description: "There are many MERN application that i have developed recently, click to connect with me.",
    href: "/contect",
  },
  {
    num: '04',
    title: "UI/UX Design",
    description: "I think you got the idea of my ui and ux design.",
    href: "/contect",
  },
  
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{delay:2.4, duration:2, ease:"easeIn"}
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="flex flex-row justify-between items-center ">
                  {/* digit */}
                  <div className="text-5xl font-bold text-transparent text-outline group-hover:text-outline-hover">{service.num}</div>
                  {/* arrow link */}
                  <Link href={service.href} className="w-12 h-12 border rounded-full flex justify-center items-center group-hover:bg-accent group-hover:-rotate-45
                  transition-all duration-500"> 
                    <BsArrowDownRight className="text-3xl group-hover:text-primary transition-all duration-500" /> 
                  </Link>
                </div>
                {/* heading */}
                <h2 className=" text-white leading-none group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services