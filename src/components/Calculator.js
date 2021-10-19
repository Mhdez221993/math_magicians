import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';
import Screen from './Screen';

const Calculator = () => {
  const [state, setItem] = useState(
    (state, newState) => ({ ...state, ...newState }),
    {},
  );

  const handleClick = event => {
    setItem(calculate(state, event.target.value));
  };

  const {
    next, total,
  } = state;
  const curr = next || total || '0';
  return (
    <div className="Calculator">
      <Screen value={curr} />
      <Buttons handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
