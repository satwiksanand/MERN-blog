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
    getPostStart: (state) => {
      state.loading = true;
      state.error = null;
      state.post = null;
    },
    getPostSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.post = action.payload;
    },
    getPostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
export const {
  createPostFail,
  createPostStart,
  createPostSuccess,
  getPostFailure,
  getPostStart,
  getPostSuccess,
} = postSlice.actions;
