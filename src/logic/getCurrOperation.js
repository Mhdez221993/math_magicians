import { useEffect, useRef } from 'react';

// if EQUIAL sign, getCurrOperation return the prev state, else return the curr state
export default function getCurrOperation(value) {
  const ref = useRef();

  // keep track of the prev state
  useEffect(() => {
    // This line is asigned after some update
    ref.current = value.filter(v => v) || [];
  });

  // verify that the equalSing is ether true of false
  const equalSing = value.indexOf(true) !== -1;

  // when equalSing is set to true then return prev state
  const currValues = equalSing ? ref.current : value;

  // remove undefined, true & add space in between values
  const operation = currValues.filter(v => v).map(v => v !== true && v.padStart(2, ' '));

  // if equalSing is true then return its value
  const result = equalSing ? ` = ${value[0]}` : '';

  return [operation, result];
}
