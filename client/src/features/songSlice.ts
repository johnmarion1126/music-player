import { createSlice } from '@reduxjs/toolkit';

interface SongState {
    value: 'Hello World'
}

const initialState: SongState = {
  value: 'Hello World',
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    sayHello: (state) => {
      console.log(state.value);
    },
  },
});

export const { sayHello } = songSlice.actions;
export default songSlice.reducer;
