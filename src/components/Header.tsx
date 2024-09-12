"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contect",
    path: "/contect",
  },
];

const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            prefetch={false}
            scroll={false}
            replace={false}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};


const MobileNav = () => {
  const[isOpen, setIsOpen]= useState(false);
  const pathname = usePathname();
  return (
    <>
    <div className="h-8">
        <CiMenuFries className="h-8 text-xl" onClick={() => setIsOpen( !isOpen )}/>
    </div>
    <div className={`${isOpen && "h-80 flex flex-col"} transition-all duration-500`}>
        {
          isOpen &&  
          <nav className={ `absolute flex flex-col items-center justify-start left-0 right-0 top-20 w-full p-4`}>
            {/* nav */}
            <div className="flex flex-col justify-center items-center gap-8">
              {links.map((link, index) => {
                return (
                  <Link
                  href={link.path}
                  key={index}
                  onClick={() => setIsOpen(!isOpen)}
                  className={`${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                  } text-base hover:text-accent`}
                  >
                    <div className="capitalize"> {link.name} </div>
                  </Link>
                );
              })}
            </div>
        </nav>
        }
    </div>
        </>
      );
};


const Header = () => {
  return (
    <header className={`py-8 xl:py-12 text-white h-full`} >
      <div className="container px-4 flex xl:justify-around justify-between items-start h-full">
        {/* logo */}
        <Link href="/" prefetch={false} scroll={false} replace={false}>
          <span className="text-2xl font-semibold">
            rinku&nbsp;<span className="text-accent">.</span>
          </span>
        </Link>

        {/* desktop navbar */}
        <div className="hidden lg:flex gap-8 items-center">
          <DesktopNav />
          <Link href={"/contect"}>
            <Button> Hire me </Button>
          </Link>
        </div>
        {/* mobile navbar */}
        <div className="flex lg:hidden h-full">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};


export default Header;
