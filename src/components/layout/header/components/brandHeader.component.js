import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const BrandHeaderComponent = ({props}) => {
    
    const {onShowHideLeftNav, logo} = props;
  
    return (
    <div className="header__brand">
      <FontAwesomeIcon icon={faBars} className="header__brand-menu" onClick={onShowHideLeftNav} />
      <div className="header__brand-logo">
        <img src={logo} alt="logo" />
        <span>Bryan</span>
      </div>
    </div>
  );
};

export default BrandHeaderComponent;
