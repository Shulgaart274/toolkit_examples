import React from 'react'
import styles from './TodoList.module.css'
import TodoItem from "../TodoItem/TodoItem"
import {useDispatch, useSelector} from "react-redux"
// import {deleteTodo, completedTodo} from "../../redux/action/todosAction"
// import {deleteTodo, completedTodo} from "../../redux/reducer/toolkitReducer"
import {deleteTodo, completedTodo} from "../../redux/toolkitSlice"

const TodoList = () => {

  const todosSelector = useSelector(state => state.toolkitSlice.todos)
  const statusSelector = useSelector(state => state.toolkitSlice.status)

  

  const dispatch = useDispatch()

 const onDelete = (id) => {
 
   const action = deleteTodo(id)
   dispatch(action)
 }

 const onToggle = (id) => {
   const action = completedTodo(id)
   dispatch(action)
 }

 const todos = todosSelector

 const checkStatus = () => {

   switch(statusSelector) {
     case 'completed':
     return todos.filter(todo => todo.completed === true).map(todo => {
      return <TodoItem todo={todo} key={todo.id} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)}  />
    })
     case 'active':
     return todos.filter(todo => todo.completed === false).map(todo => {
      return <TodoItem todo={todo} key={todo.id} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)}  />
    })
     default:
     return todos.map(todo => {
      return <TodoItem todo={todo} key={todo.id} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)}  />
    })
   }

}

  return (
    <ul className={styles.todoList}>
        {checkStatus()}
    </ul>
  )
}


export default TodoList