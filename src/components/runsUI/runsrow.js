import React from 'react';
import './runsrow.module.css';
import { Edit, Delete} from '@material-ui/icons';
import TimeData from '../../utilities/timedata';
import CustomButton from '../core/button/customButton';

import Database from '../../database/runinfo';

const RunsRow = (props) => {

    const { run_uid, runner_id, date, distance, time } = props;

    let clock_time = TimeData.generateClockTime(time);
    let pace = TimeData.generatePace(distance,time);
    let clean_date = TimeData.trimDateString(date);

    
    function editRun(){
        console.log(`Making changes to the Run fields`);
        let new_date = prompt(`Your (new) date? Or hit cancel.`) || date;
        let new_dist = prompt(`Your (new) dist? Or hit cancel.`) || distance;
        let new_time = prompt(`Your (new) time? Or hit cancel.`) || time;

        Database.editRun(run_uid,runner_id,new_date,new_dist,new_time)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function deleteRun(){
        Database.deleteRun(run_uid)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }



    return (
        <tr>
            <th scope="row">{runner_id}</th>
            <td>{clean_date}</td>
            <td>{distance}</td>
            <td>{clock_time}</td>
            <td>{pace}</td>
            <td>
                <CustomButton text="Edit" color="yellow" onClick={editRun} startIcon={<Edit />} />
                <CustomButton text="Delete" color="red" onClick={deleteRun} startIcon={<Delete />} />
            </td>
        </tr>
    )
}

export default RunsRow
