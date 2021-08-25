import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import calculate from '../logic/calculate';
import Buttons from './Buttons';
import Screen from './Screen';
import getCurrOperation from '../logic/getCurrOperation';
import Navbar from './Navbar';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Sidecalculator from './Sidecalculator';

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
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
        <Route path="/calculator">
          <div className="calculator-wrapper">
            <Sidecalculator />
            <div className="Calculator">
              <Screen value={[currOperation]} />
              <Screen value={curr} />
              <Buttons handleClick={handleClick} />
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Calculator;
