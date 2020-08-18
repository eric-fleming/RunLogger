import Database from './runinfo';

let dataURL = init('prod');

function init(mode){
    const mongoAtlasURL_dev = 'http://localhost:3001/mongo';
    const mongoAtlasURL_prod = 'https://runloggerdb.herokuapp.com/mongo';
    
    if (mode === 'prod') {
        return mongoAtlasURL_prod
    }
    else {
        return mongoAtlasURL_dev
    }
}


function refreshFeed() {

    return Database.fetchRuns();
};

function refreshFeedExclude(myID) {

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
    refreshFeed,
    refreshFeedExclude
}

export default FeedInfo;