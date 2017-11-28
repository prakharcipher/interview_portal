import React, { Component } from 'react';
import questions from '../database/questions.json';
import answers from '../database/answers.json';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
// import RadioButton from 'material-ui/RadioButton';

localStorage.setItem('count', 0);

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      count: 1
      // op1: '',
      // op2: '',
      // op3: '',
      // op4: '',
      // count: 0
    };
  }

  test = (value, id, answer) => {
    // this.setState({option: value});
    console.log(answer[id - 1]);
    console.log(value);
    if (answer[id - 1] === value) {
      localStorage.setItem(
        'count',
        parseInt(localStorage.getItem('count')) + 1
      );
      console.log(localStorage.getItem('count'));
      localStorage.setItem('score', localStorage.getItem('count'));
    } else {
      return 0;
    }
    //console.log(this.state.count);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // var lastNumber = 0;
  isrannum = (n, ranNums) => {
    // console.log(n);
    for (var i = 0; i < 5; i++) {
      // console.log(ranNums[i]);
      if (n === JSON.stringify(ranNums[i])) return 1;
    }
    // console.log('false');
    return 0;
  };

  render() {
    var nums = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      ranNums = [],
      i = nums.length,
      j = 0,
      c = 0;

    while (i--) {
      if (c === 5) {
        break;
      }
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      c++;
      nums.splice(j, 1);
    }

    var answer = [];
    for (var k = 0; k < 20; k++) {
      answer[k] = answers.answers[k].ans;
    }
    console.log(answer);
    // var cou = 0;

    return (
      <div>
        {questions.questions.map((quest, index) => {
          // console.log(index);
          if (this.isrannum(quest.id, ranNums))
            return (
              <div style={{ textAlign: 'center' }} key={quest.id}>
                <div key={quest.id}>
                  <b>{quest.ques}</b>
                </div>
                <br />
                <div>
                  <input
                    type="radio"
                    name="options"
                    value={quest.options.val1}
                    onClick={event => {
                      this.test(
                        event.target.value,
                        quest.id,
                        answer
                        // this.state.count,
                        // cou
                      );
                    }}
                  />
                  {quest.options.val1}
                  <input
                    type="radio"
                    name="options"
                    value={quest.options.val2}
                    onClick={event => {
                      this.test(
                        event.target.value,
                        quest.id,
                        answer
                        // this.state.count,
                        // cou
                      );
                    }}
                  />
                  {quest.options.val2}
                  <input
                    type="radio"
                    name="options"
                    value={quest.options.val3}
                    onClick={event => {
                      this.test(
                        event.target.value,
                        quest.id,
                        answer
                        // this.state.count,
                        // cou
                      );
                    }}
                  />
                  {quest.options.val3}
                  <input
                    type="radio"
                    name="options"
                    value={quest.options.val4}
                    onClick={event => {
                      this.test(
                        event.target.value,
                        quest.id,
                        answer
                        // this.state.count,
                        // cou
                      );
                    }}
                  />
                  {quest.options.val4}
                </div>
                <br />
                <br />
              </div>
            );
          else {
            return null;
          }
        })}
        <Dialog
          // actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          // modal={true}
        >
          <span style={{ marginLeft: '40%' }}>
            Your Score is : {localStorage.getItem('count')}
          </span>
        </Dialog>
        <RaisedButton
          label="submit"
          style={{ marginLeft: '47%' }}
          primary={true}
          onClick={() => {
            this.setState({ open: true });
          }}
        />
      </div>
    );
  }
}

export default Questions;
