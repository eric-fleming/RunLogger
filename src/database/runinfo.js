const mongoAtlasURL_dev = 'http://localhost:3001/mongo';
const mongoAtlasURL_prod = 'https://runloggerdb.herokuapp.com/mongo';


function fetchRuns() {
    let data = fetch(`${mongoAtlasURL_prod}/runs`)
        .then(response => {
            return response.text();
        })
        .then(payload => {
            let json = JSON.parse(payload);
            console.log(json);
            let transformed = [];
            for (let i = 0; i < json.length; i++) {
                let item = json[i];
                transformed[i] = {
                    'run_uid': item['_id'],
                    'runner_id': item['runner_id'],
                    'date': item['date'],
                    'distance': item['distance'],
                    'time': item['time']
                };
            }
            return transformed;
            
        });
    return data;
};


const addRun = (doc) => {
    // doc is the document object from the calling function
    let runner_id = doc.getElementById('runner_id').value;
    let date = doc.getElementById('date-picker').value;
    let distance = parseFloat(doc.getElementById('dist').value);
    let hr = parseInt(doc.getElementById('time-hr').value);
    let min = parseInt(doc.getElementById('time-min').value);
    let sec = parseInt(doc.getElementById('time-sec').value);

    // time is stored in seconds
    let time = (sec + 60 * min + 3600 * hr);

    let data = fetch(`${mongoAtlasURL_prod}/run`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            runner_id: runner_id,
            date: date,
            distance: distance,
            time: time,
        })
    })
        .then(response => {
            console.log(response.text());
            window.location.reload();
        })
    return data;
}



function editRun(run_uid,runner_id,date,distance,time) {
    

    let data = fetch(`${mongoAtlasURL_prod}/run/${run_uid}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            run_uid: run_uid,
            runner_id: runner_id,
            date: date,
            distance: distance,
            time: time
        })
    })
        .then(response => {
            console.log(response.text());
            window.location.reload();
        })
    return data;
}

function deleteRun(run_uid) {
    let data = fetch(`${mongoAtlasURL_prod}/run/${run_uid}`,
        {
            method: 'DELETE',
        })
        .then(response => {
            return response.text()
        })
        .then(message => {
            alert(message);
            window.location.reload();
        })
    return data;
}









const Database = {
    fetchRuns,
    addRun,
    editRun,
    deleteRun
}

export default Database;