import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const resultArr = Array.from(data).map((mission) => ({
      id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      reserved: false,
    }));
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
