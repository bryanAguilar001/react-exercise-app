import React from 'react';
import BrandLeftNavComponent from './components/brandLeftNav.component';
import UserLeftNavComponent from './components/userLeftNav.component';
import MenuLeftNavComponent from './components/menuLeftNav.component';
import { LEFT_NAV_MENUS } from './constants/left-nav.const'

const LeftNav = (props) => {

    const user = { avatar: `https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg`, name: `Bryan Aguilar`, position: `Frontend developer` };
    const layout = {logo: `https://thumbs.dreamstime.com/b/e-r-139435804.jpg`};
    const show = true;

    return (
        <>
            { show && 
                <nav className="left-nav">

                    <BrandLeftNavComponent props={layout}/>
                    <UserLeftNavComponent props={user}/>
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
