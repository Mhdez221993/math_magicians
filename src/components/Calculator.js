import React from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';
import Screen from './Screen';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(state => calculate(state, event.target.value));
  }

  render() {
    return (
      <div>
        <div className="Calculator">
          <Screen value={this.state} />
          <Buttons handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
