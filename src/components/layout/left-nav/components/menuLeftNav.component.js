import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const MenuLeftNavComponent = ({props}) => {

    const {menu} = props;

    return (
        <div className="left-nav-menu">
            <h5 className="left-nav-menu__title">{menu.title}</h5>
            <ul className="left-nav-menu__links">
                {
                    menu.links.map((i, index) => {
                        const to = i.link ? i.link : '/';
                        return (
                            <Link to={to} key={index}>
                                <li className="left-nav-menu__links-link">
                                    <FontAwesomeIcon icon={i.icon} className="left-nav-brand__menu" />
                                    <span>{i.name}</span>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MenuLeftNavComponent;
