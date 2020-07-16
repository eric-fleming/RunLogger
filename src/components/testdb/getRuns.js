import React, { useState, useEffect } from 'react';

function GetRuns() {

    const [history, setHistory] = useState(false);

    useEffect(() => {
        getHistory();
    }, []);


    function getHistory() {
        fetch('http://localhost:3001/runs')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setHistory(data);
            });
    };

    return (
        <div>
            <h3>Running History</h3>
            <br />
            {history ? history : 'There are no run history in the database'}
        </div>
    )
}

export default GetRuns;
