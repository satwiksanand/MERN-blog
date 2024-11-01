import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    error: null,
    loading: false,
  },
  reducers: {
    check: (state, action) => {
      console.log("check reducer is clicked!");
    },
  },
});

export const { check } = userSlice.actions;

export default userSlice.reducer;
