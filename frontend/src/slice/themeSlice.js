import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: "light",
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
    },
  },
});

export default themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
