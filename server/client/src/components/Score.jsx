import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import { blue300 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

class Score extends Component {
  render() {
    return (
      <div>
        <Chip backgroundColor={blue300} style={{ marginLeft: '46%' }}>
          SCORES
        </Chip>
        <br />
        <Paper
          style={{
            width: '900px',
            height: '400px',
            marginLeft: '17.5%',
            backgroundColor: '#99ecff'
          }}
          zDepth={3}
        >
          <br />
          <div style={{ marginLeft: '25%' }}>
            <span>{localStorage.getItem('interviewee')}</span>
            <span style={{ marginLeft: '20%' }}>
              Score : {localStorage.getItem('score')}
            </span>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Score;
