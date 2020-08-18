import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';


import TimeData from '../../utilities/timedata';
import Database from '../../database/runnerinfo';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 325,
        maxWidth: 600,
        marginBottom:16,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: orange['A200'],
    },
}));

export default function FeedItem(props) {

    const [runner, setRunner] = useState([]);
    useEffect(() => {
        getRunner(runner_id);
    }, []);

    function getRunner(id){
        Database.fetchRunner(id)
            .then(data => {
                console.log(data);
                setRunner(data);
            });
    }


    const classes = useStyles();
    const { exercise, imgLink, runner_id, date, distance, time, message} = props;

    let clock_time = TimeData.generateClockTime(time);
    let pace = TimeData.generatePace(distance, time);
    let clean_date = TimeData.americanDateFormat(TimeData.trimDateString(date));
    let shortened_id = runner_id.substring(runner_id.length -2, runner_id.length);
    let shortened_name = String(runner.first).substring(0, 1).toLocaleUpperCase() + String(runner.last).substring(0,1).toLocaleUpperCase();

    return (
        <Paper>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="runner" className={classes.avatar}>{shortened_name}</Avatar>
                    }
                    title={clean_date}
                    subheader={exercise}
                />
                <CardMedia
                    className={classes.media}
                    image={imgLink}
                    title="map"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Your custom running message. {message}
                    </Typography>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs>
                            <Typography variant="h6" gutterBottom>
                                {distance}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Mi
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h6" gutterBottom>
                                {clock_time}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Duration
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h6" gutterBottom>
                                {pace}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                min/mi
                            </Typography>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Paper>
    );
}