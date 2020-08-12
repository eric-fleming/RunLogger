import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// Components
import SideDrawer from './components/sidenav/sideDrawer';
import Main from './components/sidenav/main';


function App() {

  // could fetch user data here
  // then pass it into the profile component

  return (
    <Router>
      <SideDrawer main={<Main/>} />
      
    </Router>
  );
}

export default App;
