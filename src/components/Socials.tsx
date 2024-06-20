import { FaGithub, FaLinkedin, FaYoutube, FaGooglePlusG} from "react-icons/fa"
import Link from "next/link";
import {SiGithub, SiLinkedin, SiLeetcode, SiGeeksforgeeks} from "react-icons/si"

const socials = [
    {
        icon: <SiGithub />,
        path: ""
    },
    {
        icon: <FaLinkedin />,
        path: ""
    },
    {
        icon: <SiLeetcode />,
        path: ""
    },
    {
        icon: <FaGooglePlusG />,
        path: ""
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