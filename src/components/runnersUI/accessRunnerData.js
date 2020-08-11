const postgresURL = 'http://localhost:3001/runners/';
const mongoAtlasURL = 'http://localhost:3001/mongo/runners';

function fetchRunners() {
    let data = fetch(postgresURL)
        .then(response => {
            //return response.text();
            return response.text();
        })
        .then(payload => {
            let json = JSON.parse(payload);
            console.log(json);
            // payloads are json represented as strings with one key (data)
            return json.data;
        });
    return data;
};

function fetchRunnersMongo() {
    let data = fetch(mongoAtlasURL)
        .then(response => {
            //return response.text();
            return response.text();
        })
        .then(payload => {
            let json = JSON.parse(payload);
            console.log(json);
            // payloads are json represented as strings with one key (data)
            let transformed = [];
            for (let i = 0; i < json.length; i++) {
                let item = json[i];
                transformed[i] = {
                    'id': item['_id'],
                    'first': item.name.first,
                    'last': item.name.last
                };
            }
            return transformed;
        });
    return data;
};


function editRunner(id) {
    console.log(`Making changes to the Runner fields`);
    let first = prompt(`Your (new) first name?`);
    let last = prompt(`Your (new) last name?`);

    fetch(`http://localhost:3001/runners/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            runnerid: id,
            first: first,
            last: last,
        })
    })
        .then(response => {
            console.log(response.text());
            window.location.reload();
        })
}

function deleteRunner(id) {
    fetch(`http://localhost:3001/runners/${id}`,
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
}

const AccessRunnerData = {
    fetchRunners,
    fetchRunnersMongo,
    editRunner,
    deleteRunner
}

export default AccessRunnerData;