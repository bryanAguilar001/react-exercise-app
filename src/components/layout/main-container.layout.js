import React, { useContext } from 'react';
import LayoutContext from '../../hooks/layout/layout.context';

const MainContainer = (props) => {
    
    const layout$ = useContext(LayoutContext);
    const {show} = layout$;
    const classContainer = show ? `main-container` : `main-container-full`;
    const {children} = props;


    return (
        <section className={classContainer}>
            {children}
        </section>
    )
}

export default MainContainer;
