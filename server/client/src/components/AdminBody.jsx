import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import { reactLocalStorage } from 'reactjs-localstorage';
import $ from 'jquery';

class AdminBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };
  }

  handleClick = interviewee => {
    // const payload = {
    // mail: this.state.mail
    // };
    localStorage.setItem('interviewee', interviewee);
    // var data = new FormData();
    // data.append('json', JSON.stringify(payload));
    var parameters = {
      email: localStorage.getItem('email'),
      pass: localStorage.getItem('password'),
      student: this.state.user
    };

    $.ajax({
      url: '/admin/home',
      data: parameters,
      type: 'POST'
    });
  };

  checkText = () => {
    const { mail } = this.state;
    var c1 = 0;
    var c2 = 0;
    console.log(mail[0]);
    for (var i = 0; i < mail.length; i++) {
      if (mail[i] === '@') {
        c1 += 1;
      }
      if (mail[i] === '.') {
        c2 += 1;
      }
    }
    if (c1 === 1 && c2 >= 1) {
    } else {
      window.alert('Please enter a valid E-mail address.');
    }
  };

  render() {
    return (
      <div style={{ marginLeft: '38%', marginTop: '5%' }}>
        <TextField
          hintText="Enter recepient's E-mail address"
          onChange={event => this.setState({ user: event.target.value })}
          style={{ marginLeft: '10px' }}
        />
        <RaisedButton
          label="Send"
          secondary={true}
          onClick={() => this.handleClick(this.state.user)}
        />
      </div>
    );
  }
}

export default AdminBody;
