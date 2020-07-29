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
import GetRunners from './components/testdb/getRunners';
import GetRuns from './components/testdb/getRuns';

function App() {

  // could fetch user data here
  // then pass it into the profile component

  return (
    <div>
      <Router>
        <AppHeader />
        <div>
          <div className="sidebar">
            <SideNav />
          </div>
          <div className="main_content">
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/database" component={DatabaseSearch} />
              <Route exact path="/runners" component={GetRunners} />
              <Route exact path="/runs" component={GetRuns} />
              <Route exact path="/404" component={PageNotFound} />
              <Redirect to="/404" />
            </Switch>
          </div>
        </div>

      </Router>
    </div>
    
  );
}

export default App;
