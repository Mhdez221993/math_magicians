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

  return (
    <div>
      <div className="Calculator">
        <Screen value={state} />
        <Buttons handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
