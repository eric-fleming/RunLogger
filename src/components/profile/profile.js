import React from 'react'
import style from './profile.module.css';

const profile = (props) => {
    return (
        <article className={style.profile}>
            <h2 className={style.name}>Eric Fleming</h2>
            <div className={style.stats}>
                <h3>Stats</h3>
                <ul>
                    <li>Run count: {props.runCount}</li>
                    <li>Total miles: {props.totalMiles}</li>
                    <li>Longest run: {props.longestRun}</li>
                    <li>Fastest pace: {props.fastestPace}</li>
                </ul>
            </div>

        </article>
    )
}

export default profile
