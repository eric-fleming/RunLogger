import React from 'react'



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
                <button onClick={editRunner} class="btn btn-warning">Edit</button>
                <button onClick={deleteRunner} class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default RunnerRow
