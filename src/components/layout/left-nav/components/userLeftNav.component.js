import React from "react";

const UserLeftNavComponent = ({props}) => {

    const {avatar} = props;
    const avatarStyle = { backgroundImage: `url(${avatar})` };

  return (
    <div className="left-nav-usr">
      <div className="left-nav-usr__avatar" style={avatarStyle}></div>
      <h4 className="left-nav-usr__name">Bryan Aguilar</h4>
      <h6 className="left-nav-usr__position">Frontend developer</h6>
    </div>
  );
};

export default UserLeftNavComponent;
