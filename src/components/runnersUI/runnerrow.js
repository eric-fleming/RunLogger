import React from 'react'
import { Edit, Delete} from '@material-ui/icons';
import CustomButton from '../core/button/customButton';
import AccessRunnerData from './accessRunnerData';


const RunnerRow = (props) => {
    const { id, first, last } = props;

    function editRunner(){
        return AccessRunnerData.editRunner(id);
    }

    function deleteRunner(){
        return AccessRunnerData.deleteRunner(id);
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
