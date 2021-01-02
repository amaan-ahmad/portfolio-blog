import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import socialStyles from "./social.module.css";
import Link from "next/link";

const openLink = (link) => {
  window.location.href = link;
};

const socialData = [
  {
    icon: faTwitter,
    link: "https://www.twitter.com/amaancodes",
  },
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/amaan05",
  },
  {
    icon: faGithub,
    link: "https://www.github.com/amaan-ahmad",
  },
];

export default function social() {
  return (
    <>
      <div className={socialStyles.iconFlex}>
        {socialData.map((i, index) => {
          return (
            <Link href={i.link} key={index}>
              <FontAwesomeIcon icon={i.icon} className={socialStyles.svg} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
