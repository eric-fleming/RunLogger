import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './addrunner.module.css';

function AddRunner() {

    const addRunner = () => {
        let doc = document;
        let first = doc.getElementById('firstName').value;
        let last = doc.getElementById('lastName').value;

        fetch('http://localhost:3001/runners', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ first: first, last: last })
        })
            .then(response => {
                console.log(response.text());
                window.location.reload();
            })
    }

    return (
            <form>
                <div className={style.name_input}>
                    <div className={style.half_no_pad}><TextField id="firstName" label="first name" /></div>
                    <div className={style.half_with_pad}><TextField id="lastName" label="last name" /></div>
                </div>
                <Button variant="contained" color="primary" onClick={addRunner}>Add a Runner</Button>
            </form>
    )
}

export default AddRunner
