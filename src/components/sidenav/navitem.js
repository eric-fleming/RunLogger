import React from 'react';
import { Link } from 'react-router-dom';
import style from './sidenav.module.css';
import { Room, Mood, People, RssFeed, Assignment, FitnessCenter, Settings, DirectionsRun } from '@material-ui/icons';


const iconMap = {
    'room': <Room />,
    'mood': <Mood />,
    'people': <People />,
    'rssfeed': <RssFeed />,
    'assignment': <Assignment />,
    'fitnesscenter': <FitnessCenter />,
    'settings': <Settings />,
    'run': <DirectionsRun />
}

const NavItem = (props) =>{
    const {route, iconName, text} = props;

    return (
        <Link to={route} className={style.sidebar_link}>
            {iconMap[iconName.toLowerCase()]} {text}
        </Link>
    );
}


export default NavItem;