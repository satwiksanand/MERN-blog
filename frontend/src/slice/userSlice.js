import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const signIn = createAsyncThunk(
  "auth/signin",
  async ({ data, navigate }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const finalResponse = await response.json();
      console.log(finalResponse);
      if (!response.ok) {
        toast.error("can't sign in");
        return rejectWithValue(
          finalResponse.message || "something wrong with the server!",
        );
      }
      toast.success("login successfull");
      navigate("/");
      return fulfillWithValue(finalResponse);
    } catch (err) {
      toast.error("something up with the server!");
      return rejectWithValue(err.message || "something wrong with the server!");
    }
  },
);

export const signUp = createAsyncThunk(
  "auth/signup",
  async ({ data, navigate }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const finalResponse = await response.json();
      if (!response.ok) {
        toast.error(finalResponse.message || "something up with the server");
        return rejectWithValue(
          finalResponse.message || "something up with the server",
        );
      }
      toast.success(finalResponse.message || "User Created!");
      navigate("/signin");
    } catch (err) {
      toast.error(err.message || "something up with the server!");
      return rejectWithValue(err.message || "something up with the server!");
    }
  },
);

export const updateUser = createAsyncThunk(
  "user/update",
  async ({ data, _id }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/user/update/${_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          credentials: "include",
        },
      );
      const finalData = await res.json();
      if (!res.ok) {
        toast.error(finalData.message || "something wrong with the server!");
        return rejectWithValue(
          finalData.message || "something wrong with the server",
        );
      }
      toast.success("user updated!");
      return fulfillWithValue(finalData);
    } catch (err) {
      toast.error(err.message || "something wrong with the server!");
      return rejectWithValue(err.message || "something wrong with the server!");
    }
  },
);

export const deleteUser = createAsyncThunk("user/delete", async ({ _id }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/v1/user/delete/${_id}`, {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    const finalData = await res.json();
    if (res.ok) {
      toast.success(finalData.message);
    } else {
      toast.error(finalData.message || "something wrong with the server");
    }
  } catch (err) {
    toast.error(err.message || "something wrong with the server!");
  }
});

export const signOut = createAsyncThunk("user/signout", async () => {
  try {
    const res = await fetch("http://localhost:3000/api/v1/user/signout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const finalData = await res.json();
    if (res.ok) {
      toast.success("Sign out Successfull!");
    } else {
      toast.error(
        finalData.message || "Something up with the server! Try Again later",
      );
    }
  } catch (err) {
    toast.error(err.message || "Can't sign out, try Again!");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    //sign in
    builder.addCase(signIn.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.currentUser = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentUser = action.payload;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.currentUser = null;
    });

    //sign up
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.currentUser = null;
    });
    builder.addCase(signUp.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.currentUser = null;
    });

    //update user
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //delete user
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //signout
    builder.addCase(signOut.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
