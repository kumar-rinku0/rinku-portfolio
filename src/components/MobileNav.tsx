"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center ">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        {/* logo */}
        <div className="mt-32 mb-40 text-2xl text-center font-semibold flex justify-center">
          <Link href="/" prefetch={false} scroll={false} replace={false}>
            <SheetClose>
              rinku <span className="text-accent">.</span>
            </SheetClose>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-base hover:text-accent`}
              >
                <SheetClose className="capitalize"> {link.name} </SheetClose>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
