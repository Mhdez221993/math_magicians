import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from './Quotes';

describe('test quotes inner content and correct rendering of the Quotes page', () => {
  it('Quotes page is rendered correctly', () => {
    const tree = renderer
      .create(<Quotes />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Test Quotes title', () => {
    const { getByText } = render(<Quotes />);

    expect(getByText('Math Magicians')).toBeInTheDocument();
  });
});
