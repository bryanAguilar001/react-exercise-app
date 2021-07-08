import React, { useReducer } from 'react';
import LayoutContext from './layout.context';
import { LayoutReducer } from './reducer/layout.reducer';
import { LAYOUT_TYPES } from './types/layout.types';

const LayoutProvider = (props) => {
    const {children} = props;
    
    const onShowHideLeftNav = () => {
        setstate({type: LAYOUT_TYPES.SHOW_HIDE_LEFTNAV})
    };

    const initialState = {
        show: false,
        logo: 'https://thumbs.dreamstime.com/b/e-r-139435804.jpg',
        onShowHideLeftNav
    };

    const [state, setstate] = useReducer(LayoutReducer, initialState);

    return (
        <LayoutContext.Provider value={state}>
            {children}
        </LayoutContext.Provider>
    )
}

export default LayoutProvider;