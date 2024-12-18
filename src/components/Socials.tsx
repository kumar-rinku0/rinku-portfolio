import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { SiGithub, SiLeetcode } from "react-icons/si";

const socials = [
  {
    name: "github",
    icon: <SiGithub />,
    path: "https://github.com/kumar-rinku0",
  },
  {
    name: "linkedin",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/kumar-rinku0/",
  },
  {
    name: "leetcode",
    icon: <SiLeetcode />,
    path: "https://leetcode.com/kumar-rinku0/",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    path: "https://www.instagram.com/kumar_rinku_/",
  },
];

type SocialsProp = {
  containerStyle: string;
  iconStyle: string;
};
const Socials = ({ containerStyle, iconStyle }: SocialsProp) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => {
        return (
          <Link
            href={social.path}
            key={index}
            className={iconStyle}
            prefetch={false}
            scroll={false}
            replace={false}
            title={social.name}
            target="_blank"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
