import calculate from './calculate';

describe('calculator logic', () => {
  test('calculate', () => {
    const buttonName = '=';
    const obj = {
      total: '2',
      next: '4',
      operation: 'x',
    };

    expect(calculate(obj, buttonName).total).toBe('8');
  });

  test('10 + 15 = 25', () => {
    let data = {};
    data = { ...data, ...calculate(data, '15') };
    data = { ...data, ...calculate(data, '+') };
    data = { ...data, ...calculate(data, '10') };
    data = { ...data, ...calculate(data, '=') };

    const newData = {
      total: '25',
      next: null,
      operation: null,
    };

    expect(data).toEqual(newData);
  });

  test('10 - 5 = 5', () => {
    let data = {};
    data = { ...data, ...calculate(data, '10') };
    data = { ...data, ...calculate(data, '-') };
    data = { ...data, ...calculate(data, '5') };
    data = { ...data, ...calculate(data, '=') };

    const newData = {
      total: '5',
      next: null,
      operation: null,
    };

    expect(data).toEqual(newData);
  });

  test('10 - 5 = 5', () => {
    let data = {};
    data = { ...data, ...calculate(data, '10') };
    data = { ...data, ...calculate(data, '-') };
    data = { ...data, ...calculate(data, '5') };
    data = { ...data, ...calculate(data, '=') };

    const newData = {
      total: '5',
      next: null,
      operation: null,
    };

    expect(data).toEqual(newData);
  });

  test('10 x 5 = 50', () => {
    let data = {};
    data = { ...data, ...calculate(data, '10') };
    data = { ...data, ...calculate(data, 'x') };
    data = { ...data, ...calculate(data, '5') };
    data = { ...data, ...calculate(data, '=') };

    const newData = {
      total: '50',
      next: null,
      operation: null,
    };

    expect(data).toEqual(newData);
  });

  test('-10 - 5 = -15', () => {
    let data = {};
    data = { ...data, ...calculate(data, '10') };
    data = { ...data, ...calculate(data, '+/-') };
    data = { ...data, ...calculate(data, '-') };
    data = { ...data, ...calculate(data, '5') };
    data = { ...data, ...calculate(data, '=') };

    const newData = {
      total: '-15',
      next: null,
      operation: null,
    };

    expect(data).toEqual(newData);
  });

  test('20 x 2.05 = 41', () => {
    let data = {};
    data = { ...data, ...calculate(data, '20') };
    data = { ...data, ...calculate(data, 'x') };
    data = { ...data, ...calculate(data, '2.05') };
    data = { ...data, ...calculate(data, '=') };

    const newData = {
      total: '41',
      next: null,
      operation: null,
    };

    expect(data).toEqual(newData);
  });

  test('1 ÷ 2 = 0.5', () => {
    let data = {};
    data = { ...data, ...calculate(data, '1') };
    data = { ...data, ...calculate(data, '÷') };
    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, '=') };

    const newData = {
      total: '0.5',
      next: null,
      operation: null,
    };

    expect(data).toEqual(newData);
  });

  test('7 ÷ 3 = 1', () => {
    let data = {};
    data = { ...data, ...calculate(data, '7') };
    data = { ...data, ...calculate(data, '%') };
    data = { ...data, ...calculate(data, '3') };
    data = { ...data, ...calculate(data, '=') };

    const newData = {
      total: '1',
      next: null,
      operation: null,
    };

    expect(data).toEqual(newData);
  });
});
