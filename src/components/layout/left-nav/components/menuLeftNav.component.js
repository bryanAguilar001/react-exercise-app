import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuLeftNavComponent = ({props}) => {

    const {menu} = props;

    return (
        <div className="left-nav-menu">
            <h5 className="left-nav-menu__title">{menu.title}</h5>
            <ul className="left-nav-menu__links">
                
                {
                    menu.links.map((i, index) => {
                        return (
                            <li className="left-nav-menu__links-link" key={index}>
                                <FontAwesomeIcon icon={i.icon} className="left-nav-brand__menu" />
                                <span>{i.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MenuLeftNavComponent;
