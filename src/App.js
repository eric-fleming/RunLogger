import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, Redirect, BrowserRouter as Router } from 'react-router-dom';

// Components
import MainPage from './pages/mainpage';
import PageNotFound from './pages/pagenotfound';


import Profile from './components/profile/profile';
import AddRun from './components/addrun/addrun';
import RunTable from './components/runtable/runtable';
import TestDB from './components/testdb/testdb';

function App() {

  

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route component={PageNotFound} />
      </Switch>
      
    </Router>
  );
}

export default App;
