import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';
import Screen from './Screen';

const Calculator = () => {
  const [state, setItem] = useState(
    (state, newState) => ({ ...state, ...newState }),
    { next: null, total: null, operation: null },
  );

  const handleClick = event => {
    setItem(calculate(state, event.target.value));
  };

  const { next, total, operation } = state;
  const currValues = [total, operation, next].filter(v => v).map(v => v.padStart(2, ' '));
  const curr = next || total || '0';
  return (
    <div>
      <div className="Calculator">
        <Screen value={currValues} />
        <Screen value={curr} />
        <Buttons handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
