import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container px-4 flex xl:justify-evenly justify-between items-center">
        {/* logo */}
        <Link href="/" prefetch={false} scroll={false} replace={false}>
          <span className="text-2xl font-semibold">
            rinku&nbsp;<span className="text-accent">.</span>
          </span>
        </Link>

        {/* desktop navbar */}
        <div className="hidden lg:flex gap-8 items-center">
          <Nav />
          <Link href={"/contect"}>
            <Button> Hire me </Button>
          </Link>
        </div>
        {/* mobile navbar */}
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
