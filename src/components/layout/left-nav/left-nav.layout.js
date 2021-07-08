import React, { useContext } from 'react';
import BrandLeftNavComponent from './components/brandLeftNav.component';
import UserLeftNavComponent from './components/userLeftNav.component';
import MenuLeftNavComponent from './components/menuLeftNav.component';
import { LEFT_NAV_MENUS } from './constants/left-nav.const'
import LayoutContext from '../../../hooks/layout/layout.context';
import UserContext from '../../../hooks/user/user.context';

const LeftNav = (props) => {

    const layout$ = useContext(LayoutContext);
    const user$ = useContext(UserContext);
    const {show} = layout$; 

    return (
        <>
            { show && 
                <nav className="left-nav">

                    <BrandLeftNavComponent props={layout$}/>
                    <UserLeftNavComponent props={user$}/>
                    {
                        LEFT_NAV_MENUS.map((i, index) => {
                            return <MenuLeftNavComponent props={{menu: i}} key={index}/>
                        })
                    }

                </nav>
            }
        </>
    )
}

export default LeftNav;
