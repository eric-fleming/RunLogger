import React from 'react'

const runrow = (props) => {
    const {index,date,dist,time,pace} = props;
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{date}</td>
            <td>{dist}</td>
            <td>{time}</td>
            <td>{pace}</td>
        </tr>
    )
}

export default runrow
