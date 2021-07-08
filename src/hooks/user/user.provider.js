import React, { useReducer } from 'react';
import UserContext from './user.context';
import { UserReducer } from './reduer/user.reducer';

const UserProvider = (props) => {
    const {children} = props;

    const initialState = {
        name: 'Bryan Aguilar',
        position: 'Frontend developer',
        avatar: 'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg'
    };

    const [state, setstate] = useReducer(UserReducer, initialState);

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;