import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userList: [],
    userDetails: {},
  },
  reducers: {
    userList: (state, action) => {
      state.userList = action.payload;
    },
    userDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

// this is for dispatch
export const { userList, userDetails } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
