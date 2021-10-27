import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import Calculate from './Calculate';

describe('test calculator and correct rendering of the calculate page', () => {
  it('Calculate page is rendered correctly', () => {
    const tree = renderer
      .create(<Calculate />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calculator works ( result displayed = 0.5)', () => {
    const { getByText } = render(<Calculate />);

    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('='));

    expect(getByText('0.5')).toBeInTheDocument();
  });
});
