import React from 'react';
import { Link } from 'react-router-dom';
import style from './sidenav.module.css';
import { Room, Mood, People, RssFeed, Assignment, FitnessCenter, Settings} from '@material-ui/icons';
function SideNav() {
    return (
        <div className={style.sidebar}>
            
            <Link to="/" className={style.sidebar_link}>
                <Room />Start
            </Link>
            <Link to="/runs" className={style.sidebar_link}>
                <Mood />Me
            </Link>
            <Link to="/profile" className={style.sidebar_link}>
                <Assignment />
                Goals
            </Link>
            <Link to="/runs" className={style.sidebar_link}>
                <RssFeed />Feed
            </Link>
            <Link to="/runners" className={style.sidebar_link}>
                <People />Friends
            </Link>
            <Link to="/" className={style.sidebar_link}>
                <FitnessCenter />Challenges
            </Link>
            <Link to="/database" className={style.sidebar_link}>
                <Settings />Settings
            </Link>
        </div>
    )
}

export default SideNav
