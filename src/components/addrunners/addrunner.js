import React from 'react';
//import style from './addrunner.module.css';


function AddRunner() {

    const createRunner = () => {
        let first = prompt("first name?");
        let last = prompt("last name?");

        fetch('http://localhost:3001/addrunner',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({first:first,last:last})
        })
        .then(response => {
            console.log(response.text());
            window.location.reload();
        })
    }

    const addRunner = () => {
        let doc = document;
        let first = doc.getElementById('firstName').value;
        let last = doc.getElementById('lastName').value;

        fetch('http://localhost:3001/addrunner', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ first: first, last: last })
        })
            .then(response => {
                console.log(response.text());
                window.location.reload();
            })
    }

    return (
        <div>
            <form>
                <div>
                    <label for="firstName">First</label>
                    <input id="firstName" type="text"></input>
                </div>
                <div>
                    <label for="lastName">Last</label>
                    <input id="lastName" type="text"></input>
                </div>
                <button onClick={addRunner}>Add a Runner from Form</button>
            </form>
            <button onClick={createRunner}>Add a Runner with Prompt</button>
            
        </div>
    )
}

export default AddRunner
