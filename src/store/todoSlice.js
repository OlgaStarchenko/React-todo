import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: ["Почистить картошку", "Сходить в магазин"],
};

const todoSlice = () => {
  createSlice({
    name: "todo",
    initialState,
    reducers: {},
  });
};

export const todoReducer = todoSlice.reducers;
// export const {} = todoSlice.actions;
