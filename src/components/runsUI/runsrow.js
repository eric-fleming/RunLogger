import React from 'react';
import './runsrow.module.css';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TimeData from '../../utilities/timedata';

import { ThemeProvider  } from '@material-ui/core/styles';
import ColorTheme from '../../colorpalette';




const RunsRow = (props) => {

    const { run_uid, id, date, distance, time } = props;

    let clock_time = TimeData.generateClockTime(time);
    let pace = TimeData.generatePace(distance,time);
    let clean_date = TimeData.trimDateString(date);

    function editRun() {
        console.log(`Making changes to the Run fields`);
        let new_date = prompt(`Your (new) date? Or hit cancel.`);
        let new_dist = prompt(`Your (new) dist? Or hit cancel.`);
        let new_time = prompt(`Your (new) time? Or hit cancel.`);

        fetch(`http://localhost:3001/runs/${run_uid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                run_uid: run_uid,
                runnerid: id,
                date: new_date || date,
                distance: new_dist || distance,
                time: new_time ||time
            })
        })
            .then(response => {
                console.log(response.text());
                window.location.reload();
            })
    }

    function deleteRun() {
        fetch(`http://localhost:3001/runs/${run_uid}`,
            {
                method: 'DELETE',
            })
            .then(response => {
                return response.text()
            })
            .then(message => {
                alert(message);
                window.location.reload();
            })
    }




    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{clean_date}</td>
            <td>{distance}</td>
            <td>{clock_time}</td>
            <td>{pace}</td>
            <td>
                <ThemeProvider  theme={ColorTheme}>
                    <Button variant="contained" color="success" onClick={editRun} startIcon={<EditIcon />}>Edit</Button>
                    <Button variant="contained" color="secondary" onClick={deleteRun} startIcon={<DeleteIcon />}>Delete</Button>
                </ThemeProvider >
            </td>
        </tr>
    )
}

export default RunsRow
