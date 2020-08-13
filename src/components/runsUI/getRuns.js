import React, { useState, useEffect } from 'react';
import RunsRow from './runsrow';
import AddRun from '../addrun/addrun';

import Database from '../../database/runinfo';

function GetRuns() {

    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);


    function fetchHistory() {
        Database.fetchRuns()
            .then(data => setHistory(data));
        
    };

    return (
        <div>
            <h3>Running History</h3>
            <br />
            <div>
                <AddRun />
            </div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Runner ID#</th>
                        <th scope="col">date</th>
                        <th scope="col">dist</th>
                        <th scope="col">time</th>
                        <th scope="col">pace</th>
                        <th scope="col">changes</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map(run => (
                        
                        <RunsRow
                            key={run.run_uid}
                            run_uid={run.run_uid}
                            runner_id={run.runner_id}
                            date={run.date}
                            distance={run.distance}
                            time={run.time}
                            pace={run.pace}
                        />
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default GetRuns;
// {history ? history : 'There are no run history in the database'}