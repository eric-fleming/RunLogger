import React from 'react'
import style from './addrun.module.css';


const AddRun = () => {

    const addRun = () => {
        let doc = document;
        let runner_id = parseInt(doc.getElementById('runner_id').value);
        let date = doc.getElementById('date').value;
        let distance = parseFloat(doc.getElementById('dist').value);;
        let hr = parseInt(doc.getElementById('time-hr').value);
        let min = parseInt(doc.getElementById('time-min').value);
        let sec = parseInt(doc.getElementById('time-sec').value);

        // time is stored in seconds
        let time = (sec + 60*min + 3600*hr);

        fetch('http://localhost:3001/runs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                runnerid: runner_id,
                date: date,
                distance: distance,
                time: time
            })
        })
        .then(response => {
            console.log(response.text());
            window.location.reload();
        })
    }

    return (
        <div>
            <form>
                <div className={style.form_Inputs}>
                    <div className={style.form_Input}>
                        <label for="runner_id">Runner ID</label>
                        <input id="runner_id" type="number" min="1"></input><br />
                    </div>
                    <div className={style.form_Input}>
                        <label for="date">Date</label>
                        <input id="date" type="text"></input><br />
                    </div>
                    <div className={style.form_Input}>
                        <label for="dist">Dist</label>
                        <input className={style.dist} id="dist" type="text"></input><br />
                    </div>
                    <div className={style.form_Input}>
                        <label for="time-hr">Time</label>
                        <input className={style.time} id="time-hr" type="number" min="0"></input>
                        <input className={style.time} id="time-min" type="number" min="0"></input>
                        <input className={style.time} id="time-sec" type="number" min="0"></input>
                    </div>
                </div>
                <button class="btn btn-primary" onClick={addRun}>Enter Run</button>
            </form>
        </div>
    )
}

export default AddRun
