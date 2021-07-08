import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const SocialsFooterComponent = () => {
  return (
    <div className="footer__socials">
      <FontAwesomeIcon icon={faLinkedin} className="footer__socials-social" />
      <FontAwesomeIcon icon={faGithub} className="footer__socials-social" />
      <FontAwesomeIcon icon={faGlobe} className="footer__socials-social" />
    </div>
  );
};

export default SocialsFooterComponent;
