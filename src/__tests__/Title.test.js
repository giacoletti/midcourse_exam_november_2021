import React from 'react';
import Title from '../components/Title';
import { screen, render } from '@testing-library/react';

describe('Title.jsx', () => {
  beforeEach(() => {
    render(<Title />);
  });

  it('is expected to display header "GitHub Search engine"', () => {
    expect(screen.getByText('GitHub Search engine')).toBeVisible();
  });
});
