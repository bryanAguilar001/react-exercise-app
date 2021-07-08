import React, { useContext } from 'react';
import LayoutContext from '../../../hooks/layout/layout.context';
import UserContext from '../../../hooks/user/user.context';
import BrandHeaderComponent from './components/brandHeader.component';
import SubmenuHeaderComponent from './components/submenuHeader.component';

const Header = (props) => {
    
    const layout$ = useContext(LayoutContext);
    const user$ = useContext(UserContext);
    
    return (
        <header className="header">
            <BrandHeaderComponent props={layout$}/>
            <SubmenuHeaderComponent props={user$}/>
        </header>
    )
}

export default Header;
