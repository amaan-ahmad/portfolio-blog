import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
export default function social() {
  return (
    <>
      <FontAwesomeIcon icon={faTwitter} size={12} />
      <FontAwesomeIcon icon={faLinkedinIn} />
      <FontAwesomeIcon icon={faGithub} />
    </>
  );
}
