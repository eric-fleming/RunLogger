import React from 'react';
import NavItem from './navitem';
import style from './sidenav.module.css';

function SideNav() {
    return (
        <div className={style.sidebar}>
            <NavItem route="/" text="Start" iconName="room" />
            <NavItem route="/profile" text="Me" iconName="mood" />
            <NavItem route="/runs" text="Runs" iconName="run" />
            <NavItem route="/feed" text="Feed" iconName="rssfeed" />
            <NavItem route="/runners" text="Friends" iconName="people" />
            <NavItem route="/" text="Challenges" iconName="fitnesscenter" />
            <NavItem route="/database" text="Settings" iconName="settings" />
        </div>
    )
}

export default SideNav;
