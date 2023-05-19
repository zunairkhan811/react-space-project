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
  reducers: {
    reserveRocket: (state, { payload }) => {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) return { ...rocket, reserved: !rocket.reserved };
        return rocket;
      });
      return { ...state, rockets };
    },
  },
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

export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
