/* eslint-disable  max-classes-per-file */
import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div className="Calculator">
          <Screen />
          <Buttons />
        </div>
      </div>
    );
  }
}

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Display">
        <span className="Screen">0</span>
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
        <MapButtons keys={this.button} />
      </div>
    );
  }
}

const MapButtons = props => props.keys.map(key => (
  <div key={key.toString()} className="button">
    <button className="btn" type="button">{key}</button>
  </div>
));
