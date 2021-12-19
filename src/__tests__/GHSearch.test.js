import React from 'react';
import { screen, render } from '@testing-library/react';
import GHSearch from '../components/GHSearch';
import configureStore from '../state/store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

describe('GHSearch.jsx', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <GHSearch />
      </Provider>
    );
  });

  it('is expected to display input text', () => {
    expect(screen.getByPlaceholderText('Input GH username')).toBeVisible();
  });

  it('is expected to display "Search" button', () => {
    expect(screen.getByText('Search')).toBeVisible();
  });
});
