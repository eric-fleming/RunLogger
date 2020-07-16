import React from 'react'

const RunnerRow = (props) => {
    const { id, first, last } = props;
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{first}</td>
            <td>{last}</td>
        </tr>
    )
}

export default RunnerRow
