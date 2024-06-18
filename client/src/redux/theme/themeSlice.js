import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currTheme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.currTheme = state.currTheme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
