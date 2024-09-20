import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Links = [
  { icon: <FaGithub />, path: "https://github.com/Mohamedakkaoui" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mohamedakkaoui" },
  { icon: <FaTwitter />, path: "https://x.com/_datboiiMohamed" },
];
interface Myobject {
  containerStyles: string;
  iconStyles: string;
}
function Socials({ containerStyles, iconStyles }: Myobject) {
  return (
    <>
      <div className={containerStyles}>
        {Links.map((link, index) => {
          return (
            <Link key={index} href={link.path} className={iconStyles}>
              {link.icon}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Socials;
