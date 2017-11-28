import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import { reactLocalStorage } from 'reactjs-localstorage';
// import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
// import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
// import $ from 'jquery';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mail: '',
      pass: ''
    };
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  makeCall = (mail, passw) => {
    localStorage.setItem('email', mail);
    localStorage.setItem('password', passw);
  };

  render() {
    const actions = [
      <span>
        <Link
          to={'/admin'}
          onClick={() => this.makeCall(this.state.mail, this.state.pass)}
        >
          Login
        </Link>
      </span>
    ];

    // reactLocalStorage.set('wow', 'Tony stark');

    return (
      <div style={{ marginLeft: '44%', marginTop: '20%' }}>
        <RaisedButton
          label="Login to admin"
          secondary={true}
          onClick={this.handleClick}
        />
        <Dialog
          title="Login with your G-mail credentials"
          titleStyle={{ marginLeft: '27%' }}
          open={this.state.open}
          actions={actions}
          onRequestClose={this.handleClose}
          modal={false}
        >
          <TextField
            hintText="Enter your email.."
            style={{ marginLeft: '33%' }}
            onChange={event => this.setState({ mail: event.target.value })}
          />
          <br />
          <TextField
            hintText="Password"
            type="password"
            style={{ marginLeft: '33%' }}
            onChange={event => this.setState({ pass: event.target.value })}
          />
        </Dialog>
      </div>
    );
  }
}

export default Login;
