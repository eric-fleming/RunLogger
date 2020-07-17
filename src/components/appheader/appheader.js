import React from 'react';
import styles from './appheader.module.css';
import { Link } from 'react-router-dom';

function AppHeader() {
    return (
        <header className={styles.App_header}>
            <h1>RunLogger</h1>
            <div class={styles.nav_menu}>
                <div className={styles.nav_item}>
                    <Link className={styles.nav_text} to="/">Home</Link>
                </div>
                <div className={styles.nav_item}>
                    <Link className={styles.nav_text} to="/database">Database</Link>
                </div>
                <div className={styles.nav_item}>
                    <Link className={styles.nav_text} to="/runners">Runners</Link>
                </div>
                <div className={styles.nav_item}>
                    <Link className={styles.nav_text} to="/runs">History</Link>
                </div>
            </div>
        </header>
    )
}

export default AppHeader
