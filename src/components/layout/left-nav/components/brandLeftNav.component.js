import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const BrandLeftNavComponent = ({props}) => {

  const {onShowHideLeftNav, logo} = props;

  return (
    <div className="left-nav-brand">
      <FontAwesomeIcon icon={faBars} className="left-nav-brand__menu" onClick={onShowHideLeftNav} />
      <div className="left-nav-brand__logo">
        <img src={logo} alt="logo" />
        <span>Bryan</span>
      </div>
    </div>
  );
};

export default BrandLeftNavComponent;
