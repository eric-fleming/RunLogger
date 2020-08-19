import React, {useContext} from 'react';
import Context from '../../store/defaultContext';
import { Typography } from '@material-ui/core';
import { UserContext } from '../../store/user/userContext';


export default function DisplayUser() {

    const {globalState} = useContext(Context);
    const { userId } = useContext(UserContext);

    console.log(`userId : ${userId}`);
    return (
        <div>
            <div hidden={globalState.isLoggedIn}>
                <Typography variant="subtitle1" gutterBottom>The user IS NOT logged in</Typography>
            </div>
            <div hidden={!globalState.isLoggedIn}>
                <Typography variant="subtitle1" gutterBottom>The user IS logged in</Typography>
            </div>
            <div>
                <p>Use Context: {userId}</p>
                
            </div>
        </div>
        
    )
}