import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = localStorage.getItem('missions') ? JSON.parse(localStorage.getItem('missions')) : [];

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
    localStorage.setItem('missions', JSON.stringify(resultArr));
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
        const updatedMission = { ...mission, reserved: !mission.reserved };
        localStorage.setItem('missions', JSON.stringify(state));
        return updatedMission;
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
