/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface SongState {
    name: string,
    artist: string,
    sound: string,
    cover: string
    isPause: boolean,
    index: number
}

const initialState: SongState = {
  name: '',
  artist: '',
  sound: '',
  cover: '',
  isPause: true,
  index: 0,
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setSong: (state, { payload }) => {
      state.name = payload.name;
      state.artist = payload.artist;
      state.sound = payload.sound;
      state.cover = payload.cover;
      state.index = payload.index;
    },
    pausePlay: (state) => {
      state.isPause = !state.isPause;
    },
    skipToNext: (state) => {
      state.index += 1;
    },
    rewindToPrev: (state) => {
      if (state.index !== 0) {
        state.index -= 1;
      }
    },
  },
});

export const {
  pausePlay, setSong, skipToNext, rewindToPrev,
} = songSlice.actions;
export default songSlice.reducer;
