import { FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaGooglePlusG} from "react-icons/fa"
import Link from "next/link";
import {SiGithub, SiLinkedin, SiLeetcode, SiGeeksforgeeks} from "react-icons/si"

const socials = [
    {
        icon: <SiGithub />,
        path: "https://github.com/kumar-rinku0"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/kumar-rinku0/"
    },
    {
        icon: <SiLeetcode />,
        path: "https://leetcode.com/kumar-rinku0/"
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/kumar_rinku_/"
    },
]

const Socials = ({containerStyle, iconStyle} : any) => {
  return (
    <div className={containerStyle}>
        {socials.map((social, index) => {
            return (
                <Link 
                    href={social.path} 
                    key={index}
                    className={iconStyle}
                >{social.icon}
                </Link>);
        })}
    </div>
  )
}

export default Socials