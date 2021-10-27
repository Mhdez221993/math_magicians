import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from './Buttons';

describe('Buttons', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Buttons />);

    expect(tree).toMatchSnapshot();
  });
});
