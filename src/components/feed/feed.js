import React, { useState, useEffect } from 'react';
import RunsRow from './../runsUI/runsrow';

function Feed() {

    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);


    function fetchHistory() {
        fetch('http://localhost:3001/runs')
            .then(response => {
                return response.text();
            })
            .then(payload => {
                let json = JSON.parse(payload);
                // payloads are json represented as strings with one key (data)
                let notMyRuns = json.data.filter(run => run.runnerid !== "1");
                setHistory(notMyRuns);
            });
    };

    return (
        <div>
            <h3>Feed</h3>

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
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
                            id={run.runnerid}
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

export default Feed;
