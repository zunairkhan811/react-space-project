/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import MissionReducer from './mission/missionSlice';
import rocketsReducer from './rocket/rocketSlice';

export const store = configureStore({
  reducer: {
    missions: MissionReducer,
    rockets: rocketsReducer,
  },
});
