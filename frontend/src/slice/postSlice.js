import { createSlice } from "@reduxjs/toolkit";

//for the post part there will be no post storing thing.

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: null,
    loading: false,
    error: null,
  },
  reducers: {
    createPostStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createPostFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createPostSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
  },
});

export default postSlice.reducer;
export const { createPostFail, createPostStart, createPostSuccess } =
  postSlice.actions;
