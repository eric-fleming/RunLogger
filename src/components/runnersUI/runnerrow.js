import React from 'react'
import { Edit, Delete} from '@material-ui/icons';
import CustomButton from '../core/button/customButton';

//old
//import AccessRunnerData from './accessRunnerData';
//new
import Database from '../../database/runnerinfo';

const RunnerRow = (props) => {
    const { id, first, last } = props;

    function editRunner(){
        console.log(`Making changes to the Runner fields`);
        let firstName = prompt(`Your (new) first name?`) || first;
        let lastName = prompt(`Your (new) last name?`) || last;
        Database.editRunner(id,firstName,lastName);
    }

    function deleteRunner(){
        Database.deleteRunner(id);
    }

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{first}</td>
            <td>{last}</td>
            <td>
                <CustomButton text="Edit" color="yellow" onClick={editRunner} startIcon={<Edit />}></CustomButton>
                <CustomButton text="Delete" color="red" onClick={deleteRunner} startIcon={<Delete />}></CustomButton>
            </td>
        </tr>
    )
}

export default RunnerRow
