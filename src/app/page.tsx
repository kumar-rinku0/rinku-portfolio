import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-4 xl:py-0">
      <div className="container h-full mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-evenly xl:justify-between xl:pt-8 xl:pb-16">
          {/* text  */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Rinku Kumar</span>
            </h1>
            <AnimatedText
              el="p"
              className="max-w-[500px] mb-8 text-white/60"
              text="I excel at crafting elegent digital expriences and i am proficient in various programming languages and technologies."
              repeatDelay={15000}
              startDelay={1500}
            />
            {/* buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href={
                  "https://cdn.jsdelivr.net/gh/kumar-rinku0/rinku-portfolio/public/rinku-kumar-resume.pdf"
                }
                prefetch={false}
                scroll={false}
                replace={false}
                target="_blank"
                download
              >
                <button>
                  <div className="h-9 px-8 py-6 btn-outline hover:trasition-all leading-none gap-2 uppercase">
                    <span>Download CV</span>
                    <FiDownload className="text-lg" />
                  </div>
                </button>
              </Link>
              {/* socials */}
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="h-9 w-9 border border-accent rounded-full flex justify-center items-center object-contain text-accent text-base hover:bg-accent hover:text-primary hover:trasition-all"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
