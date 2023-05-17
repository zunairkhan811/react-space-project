import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from './fetchAPi';

const initialState = {
  rockets: [],
  isLoading: false,
  isError: false,
};


export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload;
      })

      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default rocketsSlice.reducer;
