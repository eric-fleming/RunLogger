import React, { useState, useEffect } from 'react';
import style from './runtable.module.css';
import RunRow from '../runrow/runrow';

// Data
import rundata from './rundata.json';



const Runtable = () => {

    const [runs, setRuns] = useState([]);


    const getRuns = async () => {
        console.table(rundata);
        setRuns(rundata.data);
    }

    useEffect(() => {
        console.log("Loading initial data effect...");
        getRuns();
        console.log(runs);
    });


    return (
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Distace</th>
                    <th scope="col">Time</th>
                    <th scope="col">Pace</th>
                </tr>
            </thead>
            <tbody>
                {runs.map(run => (
                    <RunRow
                        index={run.index}
                        date={run.date}
                        dist={run.dist}
                        time={run.time}
                        pace={run.pace}
                    />
                ))}
                <RunRow index="1" date="6/11/2020" dist="5.40 mi" time="0:44:23" pace="8:11" />
                <RunRow index="2" date="6/10/2020" dist="5.35 mi" time="0:43:55" pace="8:35" />
                <RunRow index="3" date="6/09/2020" dist="5.39 mi" time="0:42:03" pace="8:23" />
                <RunRow index="4" date="6/07/2020" dist="5.40 mi" time="0:46:17" pace="8:42" />
                
            </tbody>
        </table>
    )
}

export default Runtable