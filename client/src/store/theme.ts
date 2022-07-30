import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'counter',
  initialState: {
    color: 'blue'
  },
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload
    }
  }
})

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;