import Link from "next/link"
import { Button } from "./ui/button"

// components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex xl:justify-evenly justify-between items-center">
            {/* logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">rinku <span className="text-accent">.</span></h1>
            </Link>

            {/* desktop navbar */}
            <div className="hidden xl:flex gap-8 items-center">
                <Nav />
                <Link href={'/contect'}>
                    <Button> Hire me </Button>
                </Link>
            </div>
            {/* mobile navbar */}
            <div className="flex xl:hidden">
                <MobileNav />
            </div>

        </div>
    </header>
  )
}

export default Header