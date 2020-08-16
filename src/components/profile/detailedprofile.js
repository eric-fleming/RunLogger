import React from 'react'
import style from './detailedprofile.module.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Grid from '@material-ui/core/Grid';
import ProgressTabs from './progressTabs/progressTab';
import Avatar from '@material-ui/core/Avatar';
import { teal,orange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: 375,
        maxWidth: 600,
        backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        backgroundColor: orange['A200']
    },
    datapoint :{
        color: orange['A200'],
    },
    list: {
        
    }
}));



export default function DetailedProfile(props){

    // could fetch user data here
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List className={classes.list} component="div" >
                <ListItem >
                    <ListItemIcon>
                        <Avatar aria-label="runner" className={classes.avatar}>EF</Avatar>
                    </ListItemIcon>
                    <ListItemText primary="Eric Fleming" />
                </ListItem>
                <ListItem >
                    <Grid container direction="row" justify="left" alignItems="center">
                        <Grid item xs>Total Miles : <span className={classes.datapoint}><b>1789</b></span></Grid>
                        <Grid item xs>Total Activities : <span className={classes.datapoint}><b>559</b></span></Grid>
                        <Grid item xs>Total Friends : <span className={classes.datapoint}><b>2</b></span></Grid>
                    </Grid>
                </ListItem >
            </List>
            <Divider />
            <List component="div">
                <ListItem>
                    <ProgressTabs />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Activities" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Insights" />
                </ListItem>
            </List>
        </div>
    );
}

