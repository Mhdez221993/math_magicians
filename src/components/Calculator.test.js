import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />);

    expect(tree).toMatchSnapshot();
  });
});
