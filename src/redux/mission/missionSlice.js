import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios.get(url);
    const result = response.data;
    const resultArr = result.map((mission) => ({
      id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      reserved: false,
    }));
    console.log(resultArr);
    return resultArr;
  } catch (error) {
    throw new Error('Failed to fetch missions.');
  }
});

export const MissionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => state.map((mission) => {
      if (mission.id === action.payload) {
        return { ...mission, reserved: true };
      }
      return mission;
    }),
  },
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => action.payload,
  },
});

export const { joinMission } = MissionsSlice.actions;
export default MissionsSlice.reducer;
