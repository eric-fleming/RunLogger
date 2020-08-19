import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) =>{

    const [userId, setUserId] = useState("< No user ID yet... >");

    const updateUser = (newId) =>{
        setUserId(newId);
    }

    return (
        <UserContext.Provider value={{userId, setUserId, updateUser}}>
            {props.children}
        </UserContext.Provider>
    );

}

export default UserContextProvider;