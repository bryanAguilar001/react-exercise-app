import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faComment } from "@fortawesome/free-solid-svg-icons";

const SubmenuHeaderComponent = ({props}) => {
    
    const {avatar} = props;
    const avatarStyle = { backgroundImage: `url(${avatar})` };
  
    return (
    <div className="header__submenu">
      <FontAwesomeIcon icon={faBell} className="header__submenu-icon" />
      <FontAwesomeIcon icon={faComment} className="header__submenu-icon" />
      <div className="header__submenu-usr" style={avatarStyle}></div>
    </div>
  );
};

export default SubmenuHeaderComponent;
