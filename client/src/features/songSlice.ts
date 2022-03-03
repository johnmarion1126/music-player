/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface SongState {
    name: string,
    artist: string,
    song: string,
    cover: string
    isPause: boolean
}

const initialState: SongState = {
  name: '',
  artist: '',
  song: '',
  cover: '',
  isPause: false,
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setSong: (state, { payload }) => {
      state.name = payload.name;
      state.artist = payload.artist;
      state.song = payload.song;
      state.cover = payload.cover;
    },
    pausePlay: (state) => {
      state.isPause = !state.isPause;
    },
  },
});

export const { pausePlay, setSong } = songSlice.actions;
export default songSlice.reducer;
