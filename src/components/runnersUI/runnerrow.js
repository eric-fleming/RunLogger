import React from 'react'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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
                <Button variant="contained" color="primary" onClick={editRunner} startIcon={<EditIcon />}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={deleteRunner} startIcon={<DeleteIcon />}>Delete</Button>
            </td>
        </tr>
    )
}

export default RunnerRow
