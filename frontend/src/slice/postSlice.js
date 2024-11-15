import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const createPost = createAsyncThunk(
  "post/createPost",
  async ({ data, navigate }, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/api/v1/posts/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const finalData = await res.json();

      if (!res.ok) {
        toast.error(
          finalData.message ||
            "Something went wrong with the server. Try again later!",
        );
        return rejectWithValue(
          finalData.message ||
            "Something went wrong with the server. Try again later!",
        );
      }

      toast.success("Blog created successfully");
      navigate("/blogs");
    } catch (err) {
      toast.error(err.message || "Error while creating Blog!");
      return rejectWithValue(err.message || "Error while creating Blog!");
    }
  },
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ id }, { fulfillWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/posts/delete/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        },
      );
      const finalData = await res.json();
      if (res.ok) {
        toast.success("post deleted successfully!");
        return fulfillWithValue(id);
      } else {
        toast.error(finalData.message || "unable to delete the post!");
      }
    } catch (err) {
      toast.error(err.message || "unable to delete the post!");
    }
  },
);

export const getPostById = createAsyncThunk(
  //this funciton is not actually causing any state changes in the slice i wonder if it is allright to put it here
  "post/getById",
  async ({ id, navigate, setBlogData }, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:3000/api/v1/posts/read/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const finalData = await res.json();

      if (!res.ok) {
        toast.error(finalData.message || "Error while fetching the data!");
        navigate("/");
        return rejectWithValue(
          finalData.message || "Error while fetching the data!",
        );
      }

      setBlogData(finalData);
      return finalData;
    } catch (err) {
      toast.error(err.message || "Error while fetching the data!");
      navigate("/");
      return rejectWithValue(err.message || "Error while fetching the data!");
    }
  },
);

export const getByCategory = createAsyncThunk(
  "post/getByCategory",
  async ({ data }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/posts/get/${data["category"]}/${data["limit"]}`,
        {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          method: "GET",
        },
      );
      const finalData = await res.json();
      console.log(finalData);
      if (!res.ok) {
        toast.error(finalData.message || "Something wrong with the server!");
        return rejectWithValue(
          finalData.message || "Something wrong with the server!",
        );
      }
      return fulfillWithValue(finalData);
    } catch (err) {
      toast.error(err.message || "Something wrong with the server!");
      return rejectWithValue(err.message || "Something wrong with the server!");
    }
  },
);

export const updatePost = createAsyncThunk(
  "post/update",
  async ({ data, id, navigate }, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/posts/update/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(data),
        },
      );
      const finalData = await res.json();
      if (res.ok) {
        toast.success("Post updated successfully!");
        navigate("/blogs");
      } else {
        toast.error(finalData.message || "Error while updating the post");
        return rejectWithValue(
          finalData.message || "Error while updating the post",
        );
      }
    } catch (err) {
      toast(err.message || "Something wrong with the server");
      return rejectWithValue(err.message || "Something wrong with the server");
    }
  },
);

//for the post part there will be no post storing thing.

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    //creating a post
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createPost.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //deleting a post
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.post = state.post.filter((post) => post._id != action.payload);
      state.error = null;
    });

    //getPostByCategory
    builder.addCase(getByCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.post = [];
    });
    builder.addCase(getByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.post = action.payload;
    });
    builder.addCase(getByCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //update blog
    builder.addCase(updatePost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updatePost.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;
