import React from 'react'
import GetRunners from '../components/testdb/getRunners';
import GetRuns from '../components/testdb/getRuns';

function DatabaseSearch() {
    return (
        <section>
            <h2>Test DB Output</h2>
            <div>
                <GetRunners />
            </div>
            <div>
                <GetRuns />
            </div>
        </section>
    )
}

export default DatabaseSearch;
