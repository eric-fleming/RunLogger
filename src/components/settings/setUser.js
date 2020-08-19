import React, { useContext } from 'react';

import TextField from '@material-ui/core/TextField';
import CustomButton from '../core/button/customButton';
import Sync from '@material-ui/icons/Sync';
import { UserContext } from '../../store/user/userContext';


export default function SetUser() {

    const { userId,setUserId, updateUser } = useContext(UserContext);

    function makeCurrentUser(){
        const user = document.getElementById("updatedUser").value;
        console.log(user);
        console.log('clicked');
        setUserId(user);
        console.log('user id is now : '+userId)
    }
    

    return (
        <section>
            <form>
                <TextField id="updatedUser" label="enter new user id" />
                <CustomButton
                    text="Make Current User"
                    color="green"
                    onClick={() => makeCurrentUser()}
                    endIcon={<Sync />}
                />
            </form>
        </section>
    )
}