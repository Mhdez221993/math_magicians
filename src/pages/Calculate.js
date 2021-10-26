import React from 'react';
import Calculator from '../components/Calculator';

const Calculate = () => (
  <div className="calculator-wrapper">
    <div className="description">
      <h2>WHAT IS NEW</h2>
      <p>
        Calculator now displays decimal results and symbolic results for
        fractions or certain advanced functions.
        For example, 10 ÷ 12 will display both 0.83333....
      </p>
    </div>
    <Calculator />
  </div>
);

export default Calculate;
