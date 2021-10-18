import React, { Component } from 'react';
import Buttons from './Buttons';
import Screen from './Screen';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Calculator">
        <Screen />
        <Buttons />
      </div>
    );
  }
}

export default Calculator;
