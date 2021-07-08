import React from 'react';

const UserContext = React.createContext({
    name: '',
    position: '',
    avatar: ''
});

export default UserContext;
