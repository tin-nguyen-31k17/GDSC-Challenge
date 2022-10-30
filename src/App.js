import React from 'react';
import Logo from './logo.png'
import { Link } from 'react-router-dom';
import './App.css';
import 'whatwg-fetch';
import Home from './Home';
import Footer from './Footer'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <div className="header">

          <div className="App-logo">
            <img alt="app icon" width="85" src={Logo} />
          </div>

          <div className="siteName">
            <h1>Assessment Group 7 Movie Database</h1>
          </div>

          <div className="homeBtn">
            <Link style={{ textDecoration: 'none' }} to="/">
              <HomeRoundedIcon />
            </Link>
          </div>

        </div>
        <AppBar position="static" style={{ backgroundColor: 'black' }} >
          <Toolbar >
            <Typography variant="subtitle1" style={{ flex: 7, color: 'white', textAlign: 'center', }} >
              Look up your favourite TV shows, Movies and Actors
            </Typography>
          </Toolbar>
        </AppBar>
        <Home />
        <Footer />
      </div >
    );
  }

}

export default App;