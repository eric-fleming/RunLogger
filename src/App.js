import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

// Components
import MainPage from './pages/mainpage';
import PageNotFound from './pages/pagenotfound';
import DatabaseSearch from './pages/databasesearch';

import GetRunners from './components/testdb/getRunners';
import GetRuns from './components/testdb/getRuns';

function App() {

  

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/database" component={DatabaseSearch} />
        <Route exact path="/runners" component={GetRunners} />
        <Route exact path="/runs" component={GetRuns} />
        <Route exact path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
      
    </Router>
  );
}

export default App;
