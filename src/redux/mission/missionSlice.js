import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
};

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios(url);
  console.log(response.data);
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
        state.isLoading = true;
        state.missions = action.payload;
      })

      .addCase(fetchMissions.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default MissionsSlice.reducer;
