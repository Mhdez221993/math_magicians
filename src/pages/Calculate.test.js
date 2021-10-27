import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Calculate from './Calculate';

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculate />);

    expect(tree).toMatchSnapshot();
  });

  it('Display 10.5', () => {
    const { getByText } = render(<Calculate />);

    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));

    expect(getByText('8.1')).toBeInTheDocument();
    expect(getByText('WHAT IS NEW')).toBeInTheDocument();
  });
});
