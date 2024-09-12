"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { FaSkull } from "react-icons/fa6";

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
        <CiMenuFries className="h-8 text-2xl text-[#505050]" onClick={() => setIsOpen( !isOpen )}/>
    </div>
    <div className={`${isOpen && "h-80 flex flex-col"} transition-all`}>
        {
          isOpen &&  
          <nav className={ `absolute flex flex-col items-center justify-start left-0 right-0 top-12 w-full p-4`}>
            {/* nav */}
            <div className="flex flex-col justify-center items-center gap-4 w-1/2">
              {links.map((link, index) => {
                return (
                  <Link
                  href={link.path}
                  key={index}
                  onClick={() => setIsOpen(!isOpen)}
                  className={`${
                    link.path === pathname &&
                    "text-accent shadow-b rounded-full"
                  } w-full p-2 text-base hover:text-accent text-center`}
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
    <header className={`py-4 xl:py-4 text-white h-full shadow-g`} >
      <div className="px-4 flex justify-between xl:justify-around items-start xl:items-center h-full">
        {/* logo */}
        <Link href="/" prefetch={false} scroll={false} replace={false} className="flex items-center">
            <FaSkull className="text-3xl xl:text-4xl text-[#505050]" />
            {/* <span className="text-2xl xl:text-3xl text-accent ">&real;<span className="text-[#000] text-xs xl:text-sm">&#10084;</span></span> */}
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
