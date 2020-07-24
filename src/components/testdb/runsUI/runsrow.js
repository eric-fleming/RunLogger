import React from 'react'

const RunsRow = (props) => {
    const { id, date, distance, time, pace } = props;
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{date}</td>
            <td>{distance}</td>
            <td>{time}</td>
            <td>{pace}</td>
        </tr>
    )
}

export default RunsRow
