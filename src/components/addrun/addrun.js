import React from 'react';
import style from './addrun.module.css';
import { TextField, Button} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import DatePicker from '../datepicker/datepicker';
import CustomButton from '../core/button/customButton';


const AddRun = () => {

    const addRun = () => {
        let doc = document;
        let runner_id = parseInt(doc.getElementById('runner_id').value);
        let date = doc.getElementById('date-picker').value;
        let distance = parseFloat(doc.getElementById('dist').value);
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
        <form>
            <div>
                <div className={style.margin_rt_lg}>
                    <TextField className={style.idInput} id="runner_id" label="Runner ID" />
                </div>
                <div className={style.margin_rt}>
                    <DatePicker />
                </div>
            </div>
            <div>
                <div className={style.margin_rt_lg}>
                    <TextField className={style.distInput} id="dist" label="Distance" />
                </div>
                <div className={style.margin_rt}>
                    <TextField className={style.timeInput} id="time-hr" label="hr" />
                </div>
                <div className={style.margin_rt}>
                    <TextField className={style.timeInput} id="time-min" label="min" />
                </div>
                <div className={style.margin_rt_lg}>
                    <TextField className={style.timeInput} id="time-sec" label="sec" />
                </div>
                <CustomButton onClick={addRun} text="Enter Run" color="cyan" endIcon={<SendIcon />}></CustomButton>
            </div>
        </form>
    )
}

export default AddRun
