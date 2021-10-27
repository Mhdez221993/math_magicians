import operate from './operate';

describe('operate', () => {
  test('10 + 15 = 25', () => {
    const a = 10;
    const b = 15;

    expect(operate(a, b, '+')).toEqual('25');
  });

  test('2 x 15 = 30', () => {
    const a = 2;
    const b = 15;

    expect(operate(a, b, 'x')).toEqual('30');
  });

  test('20 - 15 = 5', () => {
    const a = 20;
    const b = 15;

    expect(operate(a, b, '-')).toEqual('5');
  });

  test('20 ÷ 15 = 5', () => {
    const a = 20;
    const b = 3;

    expect(operate(a, b, '÷')).toEqual('6.66666666666666666667');
  });

  test('20 % 15 = 5', () => {
    const a = 10;
    const b = 3;

    expect(operate(a, b, '%')).toEqual('1');
  });

  test('-10 + 15 = 5', () => {
    const a = -10;
    const b = 15;

    expect(operate(a, b, '+')).toEqual('5');
  });
});

describe('invalid operations', () => {
  test('zero division should throw error', () => {
    const a = 2;
    const b = 0;

    const zeroDivision = () => operate(a, b, '÷');

    expect(() => zeroDivision()).toThrow('[big.js] Division by zero');
  });
});
