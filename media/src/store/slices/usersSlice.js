import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    listOfUsers: [],
  },
  reducers: {},
});

export const usersReducer = usersSlice.reducer;
