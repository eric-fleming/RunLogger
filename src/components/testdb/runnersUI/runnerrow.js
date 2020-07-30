import React from 'react'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const RunnerRow = (props) => {
    const { id, first, last } = props;

    function editRunner() {
        console.log(`Making changes to the Runner fields`);
        let first = prompt(`Your (new) first name?`);
        let last = prompt(`Your (new) last name?`);

        fetch(`http://localhost:3001/runners/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                runnerid: id,
                first: first,
                last: last,
            })
        })
            .then(response => {
                console.log(response.text());
                window.location.reload();
            })
    }

    function deleteRunner() {
        fetch(`http://localhost:3001/runners/${id}`,
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
            <td>{first}</td>
            <td>{last}</td>
            <td>
                <Button variant="contained" color="primary" onClick={editRunner} startIcon={<EditIcon />}>Edit</Button>
                <Button variant="contained" color="Secondary" onClick={deleteRunner} startIcon={<DeleteIcon />}>Delete</Button>
            </td>
        </tr>
    )
}

export default RunnerRow
