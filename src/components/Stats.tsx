"use client";

import CountUp from "react-countup"

const stats = [
    {
        num: 3,
        text: "Months of exeprience"
    },
    {
        num: 17,
        text: "Projects completed"
    },
    {
        num: 8,
        text: "Technologies mastered",
    },
    {
        num: 234,
        text: "+ Code commits"
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none mx-auto">
                {stats.map((item, index) => {
                    return (
                        <div className="flex-1 flex items-center gap-4 justify-center xl:justify-start" key={index}>
                            <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
                            <p className={`${item.text.length < 15 ? "max-w-[100px]":"max-w-[150px]"} leading-snug text-white/50`}>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats