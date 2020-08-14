import React, { useState, useEffect } from 'react';
import RunsRow from './../runsUI/runsrow';
import FeedInfo from '../../database/feedinfo';


function Feed() {

    const [history, setHistory] = useState([]);

    useEffect(() => {
        refreshFeed();
    }, []);

    function refreshFeed() {
        FeedInfo.refreshFeed('5f306acb66d40e590c424b58')
            .then(data => setHistory(data));

    };

    return (
        <div>
            <h3>Feed</h3>

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

export default Feed;
