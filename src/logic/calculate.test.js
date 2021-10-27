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
});
