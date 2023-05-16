/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import MissionReducer from './mission/missionSlice';

export const store = configureStore({
  reducer: {
    missions: MissionReducer,
  },
});
