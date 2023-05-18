import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch Rockets.');
  }
});

export default fetchRockets;
