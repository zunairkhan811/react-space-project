import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const array = Array.from(data).map((rocket) => ({
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
