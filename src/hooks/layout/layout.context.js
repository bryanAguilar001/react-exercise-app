import React from 'react';

const LayoutContext = React.createContext({
    show: false,
    logo: '',
    onShowHideLeftNav: () => {}
});

export default LayoutContext;
