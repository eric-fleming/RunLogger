import React, { useState, useEffect } from 'react';
import RunnerRow from './runnersUI/runnerrow';


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
            <h3>Runners in the Database</h3>
            <br />
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
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