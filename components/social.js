import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import socialStyles from "./social.module.css";

const openLink = (link) => {
  window.location.href = link;
};

export default function social() {
  return (
    <>
      <div className={socialStyles.iconFlex}>
        <FontAwesomeIcon
          icon={faTwitter}
          className={socialStyles.svg}
          onClick={() => openLink("https://www.twitter.com/amaancodes")}
        />
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className={socialStyles.svg}
          onClick={() => openLink("https://www.linkedin.com/in/amaan05")}
        />
        <FontAwesomeIcon
          icon={faGithub}
          className={socialStyles.svg}
          onClick={() => openLink("https://www.github.com/amaan-ahmad")}
        />
      </div>
    </>
  );
}
