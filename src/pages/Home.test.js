import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('test calculator and correct rendering of the Home page', () => {
  it('Home page is rendered correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('Test Home title', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Welcome to the Math Magicians App')).toBeInTheDocument();
  });
});
