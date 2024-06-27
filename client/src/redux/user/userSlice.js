import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      (state.isLoading = true), (state.error = null);
    },
    signInSuccess: (state, action) => {
      (state.isLoading = false),
        (state.error = null),
        (state.user = action.payload);
    },
    signInFailure: (state, action) => {
      (state.isLoading = false), (state.error = action.payload);
    },
    updateStart: (state) => {
      (state.isLoading = true), (state.error = null);
    },
    updateSuccess: (state, action) => {
      (state.isLoading = false),
        (state.user = action.payload),
        (state.error = null);
    },
    updateFailure: (state, action) => {
      (state.isLoading = false), (state.error = action.payload);
    },
  },
});

export const {
  signInFailure,
  signInStart,
  signInSuccess,
  updateStart,
  updateSuccess,
  updateFailure,
} = userSlice.actions;
export default userSlice.reducer;
