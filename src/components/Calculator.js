/* eslint-disable  max-classes-per-file */
/* eslint-disable react/prop-types */

import React from 'react';
import calculate from '../logic/calculate';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      value: {
        next,
        total,
      },
    } = this.props;
    return (
      <div className="Display">
        <span className="Screen">{next || total || '0'}</span>
      </div>
    );
  }
}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.button = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  }

  render() {
    return (
      <div className="buttons">
        <MapButtons keys={this.button} cb={this.props} />
      </div>
    );
  }
}

const MapButtons = props => props.keys.map(key => (
  <div key={key.toString()} className="button">
    <button onClick={props.cb.handleClick} className="btn" type="button" value={key}>{key}</button>
  </div>
));

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const newState = calculate(this.state, event.target.value);
    const { total, next, operation } = newState;
    this.setState({
      total,
      next,
      operation,
    });
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
