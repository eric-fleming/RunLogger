import Database from './runinfo';

let dataURL;
init();

function init(){
    const mode = 'prod';
    const mongoAtlasURL_dev = 'http://localhost:3001/mongo';
    const mongoAtlasURL_prod = 'https://runloggerdb.herokuapp.com/mongo';
    
    if (mode === 'prod') {
        dataURL = mongoAtlasURL_prod
    }
    else {
        dataURL = mongoAtlasURL_dev
    }
}


function refreshFeed(myID) {

    let data = Database.fetchRuns()
        .then(json => {
            let notMyRuns = json.filter(run => run.runner_id !== myID);
            console.log('filtered');
            console.log(notMyRuns);
            return notMyRuns
        });
    return data;
};

const FeedInfo = {
    refreshFeed
}

export default FeedInfo;