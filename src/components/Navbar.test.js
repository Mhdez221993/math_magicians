import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <Navbar />
      </Router>,
    );

    expect(tree).toMatchSnapshot();
  });
});
