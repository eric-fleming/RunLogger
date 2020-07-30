import React, { useState, useEffect } from 'react';
import RunnerRow from './runnersUI/runnerrow';
import AddRunners from '../addrunners/addrunner';
import Button from '@material-ui/core/Button';
import SyncIcon from '@material-ui/icons/Sync';

function GetRunners() {

    const [runners, setRunners] = useState([]);

    useEffect(() => {
        fetchRunners();
    }, []);


    function fetchRunners() {
        fetch('http://localhost:3001/runners')
            .then(response => {
                return response.text();
            })
            .then(payload => {
                let json = JSON.parse(payload);
                // payloads are json represented as strings with one key (data)
                setRunners(json.data);
            });
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
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
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