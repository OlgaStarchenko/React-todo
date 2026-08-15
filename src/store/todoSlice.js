import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: ["Почистить картошку", "Сходить в магазин"],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    handleAddToDo: (store, action) => {
      if (action.payload === "") {
        alert("Введите название задачи");
        return;
      }

      store.list.push(action.payload);
    },

    handleDeleteTodo: (store, action) => {
      store.list = store.list.filter(
        (_, todoIndex) => todoIndex !== action.payload,
      );
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { handleAddToDo, handleDeleteTodo } = todoSlice.actions;
