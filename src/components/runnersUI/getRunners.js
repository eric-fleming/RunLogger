import React, { useState, useEffect } from 'react';
import RunnerRow from './runnerrow';
import AddRunners from '../addrunners/addrunner';
import Button from '@material-ui/core/Button';
import SyncIcon from '@material-ui/icons/Sync';


import AccessRunnerData from './accessRunnerData';



function GetRunners() {

    const [runners, setRunners] = useState([]);

    useEffect(() => {
        fetchRunners();
    }, []);

    function fetchRunners() {
        AccessRunnerData.fetchRunners()
            .then(data => setRunners(data));
        
    };

    function fetchRunnersMongo() {
        AccessRunnerData.fetchRunnersMongo()
            .then(data => setRunners(data));
        ;
    };


    return (
        <div>
            <h3>Add a Runner</h3>
            <br />
            <AddRunners />
            <br/>
            <Button variant="contained" color="secondary" onClick={fetchRunners} endIcon={<SyncIcon />}>Update Runners</Button>
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