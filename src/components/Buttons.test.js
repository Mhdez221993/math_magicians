import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from './Buttons';

it('Buttons snapshot test', () => {
  const tree = renderer
    .create(<Buttons />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
