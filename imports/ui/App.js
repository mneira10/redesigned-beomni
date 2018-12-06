import React, { Component } from 'react';
import HomePage from './Shared/Home/HomePage.js';
import RegisterPage from './Shared/Register/RegisterPage.js';
import LoginPage from './Shared/Login/LoginPage.js';
import PostItemsPage from './App/PostItemsPage.js';
import { Route,Switch, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Profile from './Shared/Profile/Profile.js';
import Account from './Shared/Account/Account.js';
import Results from './App/Results/Results.js';
import ReactGA from 'react-ga';
import {themeColor} from '../aux/palette.js';

function initializeReactGA() {
    ReactGA.initialize('UA-130578690-1');
    ReactGA.pageview('/homepage');
}



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loaded: null };

  }


  componentDidMount() {

    setTimeout(() => this.setState({ loaded: true }), 1300);
  }
  render() {
  	initializeReactGA();
    if (this.state.loaded === null) return <MuiThemeProvider theme={themeColor}><CircularProgress className="centered" size={80} color="primary"></CircularProgress></MuiThemeProvider>;
    return this.state.loaded ? (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/postitems" exact component={PostItemsPage} />
            <Route path="/profile" exact component={Profile}/>
            <Route path="/accountSettings" exact component={Account}/>
            <Route path="/results" exact component={Results}/>
          </Switch>
        </BrowserRouter>
      </div>
    ): <div></div>;
  }
}

export default App;