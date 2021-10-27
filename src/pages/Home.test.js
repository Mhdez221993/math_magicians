import { render } from '@testing-library/react';
import React from 'react';
import Home from './Home';

describe('Home', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Welcome to the Math Magicians App')).toBeInTheDocument();
  });
});
