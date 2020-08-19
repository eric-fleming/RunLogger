import React from 'react';
import '../../App.css';
import { Route, Switch, Redirect} from 'react-router-dom';

// Components

import MainPage from '../../pages/mainpage';
import PageNotFound from '../../pages/pagenotfound';
import DatabaseSearch from '../../pages/databasesearch';
import DetailedProfile from '../profile/detailedprofile';
import GetRunners from '../runnersUI/getRunners';
import GetRuns from '../runsUI/getRuns';
import Feed from '../feed/feed';
import Settings from '../../pages/settings';
import Challenges from '../../pages/challenges';
const Main = () => {


    return (
        <div className="main_component">
            <Switch >
                <Route exact path="/" component={MainPage} />
                <Route exact path="/profile" component={DetailedProfile} />
                <Route exact path="/database" component={DatabaseSearch} />
                <Route exact path="/runners" component={GetRunners} />
                <Route exact path="/runs" component={GetRuns} />
                <Route exact path="/feed" component={Feed} />
                <Route exact path="/challenges" component={Challenges} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/404" component={PageNotFound} />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
}

export default Main;