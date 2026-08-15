import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./TodoSlice";
import { searchReducer } from "./searchSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    search: searchReducer,
  },
});
