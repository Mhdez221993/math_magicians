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
          <Display />
          <Keys />
        </div>
      </div>
    );
  }
}

class Display extends React.Component {
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

class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.keys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  }

  render() {
    return (
      <div className="Keys">
        <MapKeys keys={this.keys} />
      </div>
    );
  }
}

const MapKeys = props => props.keys.map(key => (
  <div key={key.toString()} className="Key">
    <span>{key}</span>
  </div>
));
