import React, { useState, useEffect } from 'react';
import RunnerRow from './runnerrow';
import CustomButton from '../core/button/customButton';
import SyncIcon from '@material-ui/icons/Sync';

//old
//import AccessRunnerData from './accessRunnerData';
//new
import Database from '../../database/runnerinfo';


function GetRunners() {

    const [runners, setRunners] = useState([]);

    useEffect(() => {
        fetchRunners();
    }, []);


    function fetchRunners() {
        Database.fetchRunners()
            .then(data => setRunners(data));
        ;
    };


    return (
        <div>
            <h3>Get All Runners</h3>
            <CustomButton text="update" color="green" onClick={fetchRunners} endIcon={<SyncIcon />} />
            <br />
            <br/>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Changes</th>
                    </tr>
                </thead>
                <tbody>
                    {runners.map(runner => (
                        <RunnerRow
                            key={runner.id}
                            id={runner.id}
                            first={runner.first}
                            last={runner.last}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GetRunners;
//{runners ? runners : 'There are no runers in the database'}