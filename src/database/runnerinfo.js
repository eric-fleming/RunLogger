
const mongoAtlasURL_dev = 'http://localhost:3001/mongo';
const mongoAtlasURL_prod = 'https://runloggerdb.herokuapp.com/mongo';



function fetchRunners() {
    let data = fetch(`${mongoAtlasURL_prod}/runners`)
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
                    'first': item['name']['first'],
                    'last': item['name']['last']
                };
            }
            return transformed;
        });
    return data;
};


function fetchRunner(id){
    let runner = fetchRunners().then(runners => {
        for (let i = 0; i < runners.length; i++) {
            if (runners[i].id === String(id)) {
                return runners[i];
            }
        }
        return {}
    });
    
    return runner;
}

function addRunner(doc){
    // doc is the document opject from the calling component
    let firstName = doc.getElementById('firstName').value;
    let lastName = doc.getElementById('lastName').value;
    console.log(`did the name catch ?? ${firstName} ${lastName}`);
    let city = doc.getElementById('city').value;
    let country = doc.getElementById('country').value;

    let data = fetch(`${mongoAtlasURL_prod}/runner`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            first: firstName,
            last: lastName,
            city: city,
            country:country
        })
    })
        .then(response => {
            console.log(response.text());
            window.location.reload();
        })
    return data;
}


function editRunner(id, first, last) {

    fetch(`${mongoAtlasURL_prod}/runner/${id}`, {
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
    fetch(`${mongoAtlasURL_prod}/runner/${id}`,
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

const Database = {
    fetchRunners,
    fetchRunner,
    addRunner,
    editRunner,
    deleteRunner
}

export default Database;