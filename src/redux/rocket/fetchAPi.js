import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const { data } = await axios.get(url);
    const array = data.map((rocket) => ({
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      rocket_flickr_images: rocket.flickr_images[0],
      reserved: false,
    }));
    return array;
  } catch (error) {
    throw new Error('Failed to fetch Rockets.');
  }
});

export default fetchRockets;
