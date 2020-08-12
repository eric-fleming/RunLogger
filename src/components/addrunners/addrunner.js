import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import style from './addrunner.module.css';

import Database from '../../database/runnerinfo';

function AddRunner() {

    const add = () => {
        let doc = document;
        
        Database.addRunner(doc)
            .then(res => console.log(res));
    }

    return (
            <form>
                <div className={style.name_input}>
                    <div className={style.half_no_pad}>
                        <TextField id="firstName" label="first name" />
                    </div>
                    <div className={style.half_with_pad}>
                        <TextField id="lastName" label="last name" />
                    </div>
                </div>
                <div className={style.name_input}>
                    <div className={style.half_no_pad}>
                        <TextField id="city" label="city" />
                    </div>
                    <div className={style.half_with_pad}>
                        <TextField id="country" label="country" />
                    </div>
                </div>
                <Button variant="contained" color="primary" onClick={add} endIcon={<AddIcon />}>
                    Add
                </Button>
            </form>
    )
}

export default AddRunner
