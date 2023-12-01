import { createSlice } from "@reduxjs/toolkit";
import mock from "../../mock/data.json";
import { v4 as uuid } from "uuid";
const initialState = mock;
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { id: uuid(), title: action.payload, isComplete: false };
      return [...state, newTodo];
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
