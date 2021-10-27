import React from 'react';
import renderer from 'react-test-renderer';
import Screen from './Screen';

describe('Screen', () => {
  it('renders correctly', () => {
    const curr = '0';
    const tree = renderer.create(<Screen value={curr} />);

    expect(tree).toMatchSnapshot();
  });
});
