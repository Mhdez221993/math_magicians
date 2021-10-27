import React from 'react';
import renderer from 'react-test-renderer';
import Screen from './Screen';

it('Screen snapshot test', () => {
  const tree = renderer
    .create(<Screen />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
