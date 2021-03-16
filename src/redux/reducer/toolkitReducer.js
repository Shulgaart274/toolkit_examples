import { createAction, createReducer } from "@reduxjs/toolkit";
import { CHECK_ALL, COMPLETED_TODO, CREATE_TODO, DELETE_TODO, UNCHECK_ALL, COMPLETED_TODOS, ACTIVE_TODOS, ALL_TODOS, DELETE_COMPLETED_TODOS,
} from "../types/types";

export const createTodo = createAction(CREATE_TODO);
export const completedTodo = createAction(COMPLETED_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const checkAll = createAction(CHECK_ALL);
export const uncheckAll = createAction(UNCHECK_ALL);
export const completedTodos = createAction(COMPLETED_TODOS);
export const activeTodos = createAction(ACTIVE_TODOS);
export const allTodos = createAction(ALL_TODOS);
export const deleteCompletedTodos = createAction(DELETE_COMPLETED_TODOS);

let initialState = {
  todos: [],
  status: null,
};

export const toolkitReducer = createReducer(initialState, {
  [createTodo]: (state, action) => {
    state.todos.push(action.payload);
  },
  [completedTodo]: (state, action) => {
    state.todos.map((todo) => {
      if (todo.id === action.payload) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  },
  [deleteTodo]: (state, action) => {
    return void (state.todos = state.todos.filter(
      (todo) => todo.id !== action.payload
    ));
  },
  [checkAll]: (state) => {
    state.todos.map((todo) => {
      return (todo.completed = true);
    });
  },
  [uncheckAll]: (state) => {
    state.todos.map((todo) => {
      return (todo.completed = false);
    });
  },
  [completedTodos]: (state) => {
    state.status = "completed";
  },
  [activeTodos]: (state, action) => {
    state.status = "active";
  },
  [allTodos]: (state, action) => {
    state.status = null;
  },
  [deleteCompletedTodos]: (state, action) => {
    return void (state.todos = state.todos.filter(
      (todo) => todo.completed === false
    ));
  },
});
