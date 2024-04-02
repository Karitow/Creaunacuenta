import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
const SocialButton = () => {
    return (
        <div>
        <button type="button"><FontAwesomeIcon icon={faFacebook} size="3x" /></button>
        <button type="button"><FontAwesomeIcon icon={faGithub} size="3x" /></button>
        <button type="button"><FontAwesomeIcon icon={faLinkedinIn} size="3x" /></button>
        </div>
    );
};
export default SocialButton;