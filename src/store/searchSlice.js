import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleSearchValue: (store, action) => {
      store.searchValue = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;
export const { handleSearchValue } = searchSlice.actions;
