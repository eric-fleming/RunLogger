import React from 'react';
import '../App.css';
import Profile from '../components/profile/profile';


const MainPage = () => {
    return (
        <div className="App">
            <main>
                <section className="left-content">
                    <Profile runCount="535" totalMiles="1600 mi" longestRun="26.2 mi" fastestPace="6:35 min/mi" />
                </section>
                <section className="right-content">
                    
                </section>

            </main>

        </div>
    );
}

export default MainPage;