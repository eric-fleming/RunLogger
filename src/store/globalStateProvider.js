import React from 'react';
import useGlobalState from './useGlobalState';
import Context from './defaultContext'


const GlobalStateProvider = (props) => {
    const {children} = props;

    return (
        <Context.Provider value={useGlobalState()}>
            {children}
        </Context.Provider>
    );
}

export default GlobalStateProvider;