import React from 'react';
import BrandHeaderComponent from './components/brandHeader.component';
import SubmenuHeaderComponent from './components/submenuHeader.component';

const Header = (props) => {
    
    const user = { avatar: `https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg`, name: `Bryan Aguilar`, position: `Frontend developer` };
    const layout = {logo: `https://thumbs.dreamstime.com/b/e-r-139435804.jpg`};
    
    return (
        <header className="header">
            <BrandHeaderComponent props={layout}/>
            <SubmenuHeaderComponent props={user}/>
        </header>
    )
}

export default Header;
