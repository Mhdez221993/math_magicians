import React from 'react';

const Buttons = props => {
  const button = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="buttons">
      <MapButtons keys={button} cb={props} />
    </div>
  );
};

const MapButtons = props => props.keys.map(key => (
  <div key={key.toString()} className="button">
    <button onClick={props.cb.handleClick} className="btn" type="button" value={key}>{key}</button>
  </div>
));

export default Buttons;
