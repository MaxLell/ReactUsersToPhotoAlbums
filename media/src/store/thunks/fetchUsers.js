import { createAsyncThunk } from '@reduxjs/toolkit';
import { createStoreHook } from 'react-redux';
import axios from 'axios';

// Create the Base Type (Only relevant for Debugging)
const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');

  // DEV ONLY! -> Delete me later Baby
  await delay_ms(1000);

  return response.data;
});

// Pending

// fulfilled

// Error

// DEV ONLY! -> Only for testing
const delay_ms = (msec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, msec);
  });
};

export { fetchUsers };
