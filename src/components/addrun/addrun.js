import React from 'react';
import style from './addrun.module.css';
import { TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import DatePicker from '../datepicker/datepicker';
import CustomButton from '../core/button/customButton';

import Database from '../../database/runinfo';



const AddRun = () => {

    const add = () => {
        let doc = document;

        Database.addRun(doc)
            .then(res => console.log(res))
            .catch(err => console.log(err));
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
                <CustomButton onClick={add} text="Enter Run" color="cyan" endIcon={<SendIcon />}></CustomButton>
            </div>
        </form>
    )
}

export default AddRun
