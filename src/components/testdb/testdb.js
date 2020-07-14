import React, { useState, useEffect } from 'react';

function Testdb() {

    const [runners, setRunners] = useState(false);
    const [history, setHistory] = useState(false);

    useEffect(() => {
        getRunners();
        getHistory();
    },[]);


    function getRunners(){
        fetch('http://localhost:3001/runners')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setRunners(data);
            });
    };

    function getHistory(){
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
            <h3>Test DB Output</h3>
            <br/>
            {runners ? runners : 'There are no runers in the database'}
            <br />
            {history ? history : 'There are no run history in the database'}
        </div>
    )
}

export default Testdb
