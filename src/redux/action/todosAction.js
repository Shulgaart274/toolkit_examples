import { CREATE_TODO, COMPLETED_TODO, DELETE_TODO, CHECK_ALL, UNCHECK_ALL, COMPLETED_TODOS, ACTIVE_TODOS, ALL_TODOS, DELETE_COMPLETED_TODOS } from '../types/types'

export function createTodo(todo) {
  return {
    type: CREATE_TODO,
    payload: todo
  }
}

export function completedTodo(id) {
  return {
    type: COMPLETED_TODO,
    payload: id
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export function checkAll() {
  return {
    type: CHECK_ALL,
  }
}

export function uncheckAll() {
  return {
    type: UNCHECK_ALL,
  }
}

export function completedTodos() {
  return {
    type: COMPLETED_TODOS
  }
}

export function activeTodos() {
  return {
    type: ACTIVE_TODOS
  }
}

export function allTodos() {
  return {
    type: ALL_TODOS
  }
}

export function deleteCompletedTodos() {
  return {
    type: DELETE_COMPLETED_TODOS
  }
}