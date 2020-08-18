import React, { useState, useEffect } from 'react';
import FeedInfo from '../../database/feedinfo';
import Grid from '@material-ui/core/Grid';
import FeedItem from './feedItem';
import Database from '../../database/runnerinfo';


const images = [
    "./images/screenshot_runkeeper_1.png",
    "./images/screenshot_runkeeper_2.png",
    "./images/screenshot_runkeeper_3.png"
]


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
            <Grid container direction="column" justify="center" alignItems="center">
                {history.map((run,index) => (
                    <Grid item xs={12} key={run.run_uid}>
                        <FeedItem 
                            run_uid={run.run_uid}
                            runner_id={run.runner_id}
                            imgLink={images[index % images.length]}
                            exercise={'Run'}
                            date={run.date}
                            distance={run.distance}
                            time={run.time}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Feed;
