/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface SongState {
    name: string,
    artist: string,
    sound: string,
    cover: string
    isPause: boolean
}

const initialState: SongState = {
  name: '',
  artist: '',
  sound: '',
  cover: '',
  isPause: true,
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
    },
    pausePlay: (state) => {
      state.isPause = !state.isPause;
    },
  },
});

export const { pausePlay, setSong } = songSlice.actions;
export default songSlice.reducer;
