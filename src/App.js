import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// Components
import SideDrawer from './components/sidenav/sideDrawer';
import Main from './components/sidenav/main';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { teal, orange} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00FFFF',
    },
    secondary: {
      main: orange['A200'],
    },
  },
});


function App() {

  // could fetch user data here
  // then pass it into the profile component

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <SideDrawer main={<Main />} />
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
