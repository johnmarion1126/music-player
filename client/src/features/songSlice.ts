/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface SongState {
    isPause: boolean
}

const initialState: SongState = {
  isPause: false,
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    pausePlay: (state) => {
      state.isPause = !state.isPause;
    },
  },
});

export const { pausePlay } = songSlice.actions;
export default songSlice.reducer;
