import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';
import Screen from './Screen';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const newState = calculate(this.state, event.target.value);
    const {
      total, next, operation,
    } = newState;
    this.setState({
      total,
      next,
      operation,
    });
  }

  render() {
    const {
      next, total,
    } = this.state;
    const curr = next || total || '0';
    return (
      <div className="Calculator">
        <Screen value={curr} />
        <Buttons handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
