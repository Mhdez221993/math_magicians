import { render } from '@testing-library/react';
import React from 'react';
import Quotes from './Quotes';

describe('Quotes', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Quotes />);

    expect(getByText('Math Magicians')).toBeInTheDocument();
  });
});
