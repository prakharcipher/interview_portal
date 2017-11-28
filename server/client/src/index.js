import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Admin from './components/Admin';
import Login from './components/Login';
import Questions from './components/Questions';

injectTapEventPlugin();

// browserHistory.push('/admin');
ReactDOM.render(
  <MuiThemeProvider>
    <Router path="/" history={browserHistory}>
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route path="/questions" component={Questions} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
