import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
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

export default Buttons;
