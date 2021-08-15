import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';
import Screen from './Screen';
import getCurrOperation from '../logic/getCurrOperation';

const Calculator = () => {
  const [state, setItem] = useState(
    (state, newState) => ({ ...state, ...newState }),
    {},
  );

  const handleClick = event => {
    setItem(calculate(state, event.target.value));
  };

  const {
    next, total, operation, equalSign,
  } = state;
  const curr = next || total || '0';
  const currOperation = getCurrOperation([total, operation, next, equalSign]);
  return (
    <div>
      <div className="Calculator">
        <Screen value={[currOperation]} />
        <Screen value={curr} />
        <Buttons handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
