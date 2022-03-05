/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';

import store from '../../app/store';
import SongTitle from './SongTitle';
import SongImg from './SongImg';

beforeEach(() => {
  render(
    <Provider store={store}>
      <SongTitle />
      <SongImg />
    </Provider>,
  );
});

describe('Song Tests', () => {
  test('Song title is rendered', () => {
    expect(screen.getByTestId('name').textContent).toEqual('');
  });
  test('Song img is rendered', () => {
    const songImage: HTMLImageElement = screen.getByTestId('image');
    expect(songImage.src).toEqual('http://localhost/');
  });
});

afterAll(cleanup);
export {};
