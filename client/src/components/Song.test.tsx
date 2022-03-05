/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';

import store from '../app/store';
import SongTitle from './SongDisplay/SongTitle';
import SongImg from './SongDisplay/SongImg';

import ForwardBtn from './UserControls/MusicControls/ForwardBtn';
import RewindBtn from './UserControls/MusicControls/RewindBtn';

const testSongs = [
  {
    name: 'He Went Away',
    img: 'http://localhost/he_went_away.png',
  },
  {
    name: 'Always So True',
    img: 'http://localhost/always_so_true.png',
  },
];

beforeEach(() => {
  render(
    <Provider store={store}>
      <SongTitle />
      <SongImg />
      <ForwardBtn />
      <RewindBtn />
    </Provider>,
  );
});

describe('Song Tests', () => {
  test('Song title is rendered correctly', () => {
    expect(screen.getByTestId('name').textContent).toEqual(testSongs[0].name);
  });

  test('Song img is rendered correctly', () => {
    const songImage: HTMLImageElement = screen.getByTestId('image');
    expect(songImage.src).toEqual(testSongs[0].img);
  });

  test('Forward and Rewind buttons changes song', () => {
    const forwardBtn: HTMLButtonElement = screen.getByTestId('forward-btn');
    const rewindBtn: HTMLButtonElement = screen.getByTestId('rewind-btn');

    fireEvent.click(forwardBtn);
    expect(screen.getByTestId('name').textContent).toEqual(testSongs[1].name);
    expect((screen.getByTestId('image') as HTMLImageElement).src).toEqual(testSongs[1].img);

    fireEvent.click(rewindBtn);
    expect(screen.getByTestId('name').textContent).toEqual(testSongs[0].name);
    expect((screen.getByTestId('image') as HTMLImageElement).src).toEqual(testSongs[0].img);
  });
});

afterAll(cleanup);
export {};
