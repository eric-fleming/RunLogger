import React from 'react'
import { GetRunners, SetUser, AddRunner, DisplayUser} from '../components/registry';


export default function Settings() {
    return (
        <main>
            <h2>Settings</h2>
            <div>
                <SetUser />
            </div>
            <div>
                <h2>Display</h2>
                <DisplayUser />
            </div>
            <div>
                <GetRunners />
            </div>
            <div>
                <AddRunner />
            </div>
        </main>
    )
}

