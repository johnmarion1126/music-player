/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import songs from '../database/songs';
import SongIF from '../database/songIF';

const setSong = (state: SongIF, payload: SongIF) => {
  state.name = payload.name;
  state.artist = payload.artist;
  state.sound = payload.sound;
  state.cover = payload.cover;
  state.index = payload.index;
};

const initialState: SongIF = { ...songs[0], isPause: true };

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    pausePlay: (state) => {
      state.isPause = !state.isPause;
    },
    skipToNext: (state) => {
      state.index += 1;
      setSong(state, songs[state.index]);
    },
    rewindToPrev: (state) => {
      if (state.index !== 0) {
        state.index -= 1;
      }
      setSong(state, songs[state.index]);
    },
  },
});

export const {
  pausePlay, skipToNext, rewindToPrev,
} = songSlice.actions;
export default songSlice.reducer;
