import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import style from './addrun.module.css';


const AddRun = () => {

    const addRun = () => {
        let doc = document;
        let runner_id = parseInt(doc.getElementById('runner_id').value);
        let date = doc.getElementById('date').value;
        let distance = parseFloat(doc.getElementById('dist').value);;
        let hr = parseInt(doc.getElementById('time-hr').value);
        let min = parseInt(doc.getElementById('time-min').value);
        let sec = parseInt(doc.getElementById('time-sec').value);

        // time is stored in seconds
        let time = (sec + 60*min + 3600*hr);

        fetch('http://localhost:3001/runs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                runnerid: runner_id,
                date: date,
                distance: distance,
                time: time
            })
        })
        .then(response => {
            console.log(response.text());
            window.location.reload();
        })
    }

    return (
        <div>
            <form>
                <div className={style.form_Inputs}>
                    <div className={style.form_Input}>
                        <TextField className={style.run_id} id="runner_id" label="Runner ID"/>
                    </div>
                    <div className={style.form_Input}>
                        <label for="date">Date</label>
                        <TextField id="date" label="YYYY-MM-DD" />
                    </div>
                    <div className={style.form_Input}>
                        <TextField className={style.dist} id="dist" label="Distance" />
                    </div>
                    <div className={style.form_Input}>
                        <label for="hr">Time</label>
                        <TextField className={style.time} id="time-hr" label="hr" />
                        <TextField className={style.time} id="time-min" label="min" />
                        <TextField className={style.time} id="time-sec" label="sec" />
                    </div>
                </div>
                <Button variant="contained" color="primary" onClick={addRun} endIcon={<SendIcon />}>Enter Run</Button>
                
            </form>
        </div>
    )
}

export default AddRun
