import React from 'react';
/* eslint-enable-file max-classes-per-file */

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
    return <div className="Display" />;
  }
}

class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Keys" />
    );
  }
}
