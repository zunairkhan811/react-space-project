import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
};

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios(url);
    const result = response.data;
    // console.log(response.data);
    return result;
  } catch (error) {
    throw new Error('Failed to fetch missions.');
  }
});

export const MissionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchMissions.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.missions = action.payload;
      })

      .addCase(fetchMissions.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default MissionsSlice.reducer;
