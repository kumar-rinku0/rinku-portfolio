import { FiDownload } from "react-icons/fi"

// components
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";



export default function Home() {
    return (
        <section className="h-full">
            <div className="container h-full mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-evenly xl:justify-between lg:pt-8 lg:pb-16">
                    {/* text  */}
                    <div className="text-center lg:text-left order-2 lg:order-none">
                        <span>Software Developer</span>
                        <h1 className="h1">
                            Hello I&apos;m <br /> <span className="text-accent">Rinku Kumar</span>
                        </h1>
                        <p className="max-w-[500px] mb-8 text-white/60">
                            I excel at crafting elegent digital expriences and i am proficient in various programming languages and technologies.
                        </p>
                        {/* buttons and socials */}
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <Link href={"/rinku_kumar_resume.pdf"}>
                                <Button
                                    variant={"outline"}
                                    size={"lg"}
                                    className="uppercase flex items-center gap-2"
                                >
                                    <span>Download CV</span>
                                    <FiDownload className="text-xl" />
                                </Button>
                            </Link>
                            {/* socials */}
                            <div className="mb-8 lg:mb-0">
                                <Socials
                                    containerStyle="flex gap-6"
                                    iconStyle="h-9 w-9 border border-accent rounded-full flex justify-center items-center object-contain text-accent text-base hover:bg-accent hover:text-primary hover:trasition-all"
                                />
                            </div>
                        </div>
                    </div>
                    {/* photo */}
                    <div className="order-1 lg:order-none">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
}


