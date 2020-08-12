import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

// Components
import AppHeader from './components/appheader/appheader';
import SideNav from './components/sidenav/sidenav';
import MainPage from './pages/mainpage';
import PageNotFound from './pages/pagenotfound';
import DatabaseSearch from './pages/databasesearch';

import Profile from './components/profile/profile';
import GetRunners from './components/runnersUI/getRunners';
import GetRuns from './components/runsUI/getRuns';
import Feed from './components/feed/feed';
import SideDrawer from './components/sidenav/sideDrawer';
import Main from './components/sidenav/main';
function App() {

    // could fetch user data here
    // then pass it into the profile component

    return (
        <Router>
            <AppHeader />
            <div className="site">
                <div className="sidebar left">
                    <SideNav />
                </div>
                <div className="main_content right">
                    <Switch >
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/database" component={DatabaseSearch} />
                        <Route exact path="/runners" component={GetRunners} />
                        <Route exact path="/runs" component={GetRuns} />
                        <Route exact path="/feed" component={Feed} />
                        <Route exact path="/404" component={PageNotFound} />
                        <Redirect to="/404" />
                    </Switch>
                </div>
            </div>
            <div>
                <SideDrawer main="hello" />
            </div>
        </Router>
    );
}

export default App;
