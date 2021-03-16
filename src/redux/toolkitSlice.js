import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    todos: [],
    status: null,
  },
  reducers: {
    createTodo(state, action) {
      state.todos.push(action.payload);
    },
    completedTodo(state, action) {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    checkAll(state) {
      state.todos.map((todo) => {
        return (todo.completed = true);
      });
    },
    uncheckAll(state) {
      state.todos.map((todo) => {
        return (todo.completed = false);
      });
    },
    completedTodos(state) {
      state.status = "completed";
    },
    activeTodos(state) {
      state.status = "active";
    },
    allTodos(state) {
      state.status = null;
    },
    deleteTodo(state, action) {
      return void (state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      ));
    },
    deleteCompletedTodos(state) {
      return void (state.todos = state.todos.filter(
        (todo) => todo.completed === false
      ));
    },
  },
});

export default toolkitSlice.reducer;

export const {
  createTodo,
  completedTodo,
  deleteTodo,
  checkAll,
  uncheckAll,
  completedTodos,
  activeTodos,
  allTodos,
  deleteCompletedTodos,
} = toolkitSlice.actions;
