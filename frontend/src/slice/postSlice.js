import { createSlice } from "@reduxjs/toolkit";

//for the post part there will be no post storing thing.

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
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
      state.post = [];
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
    deletePostSuccess: (state, action) => {
      state.post = state.post.filter((post) => post._id != action.payload);
      state.error = null;
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
  deletePostSuccess,
} = postSlice.actions;
