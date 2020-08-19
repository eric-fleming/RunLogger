import React, {useState, useContext} from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// Components
import SideDrawer from './components/sidenav/sideDrawer';
import Main from './components/sidenav/main';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange} from '@material-ui/core/colors';
import GlobalStateProvider from './store/globalStateProvider';
import UserContextProvider from './store/user/userContext';

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

  
  //const [userId, setUserId] = useState("< user default not set>");


  return (
    <GlobalStateProvider>
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <Router>
            <SideDrawer main={<Main />} />
          </Router>
        </UserContextProvider>
      </ThemeProvider>
    </GlobalStateProvider>
  );
}

export default App;
