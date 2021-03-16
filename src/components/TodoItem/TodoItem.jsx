import React from 'react'
import styles from "./TodoItem.module.css"
import Checkbox from "../Checkbox/Checkbox"
import DeleteButton from "../DeleteButton/DeleteButton"

const TodoItem = ({todo, onToggle, onDelete}) => {
 
  // console.log(props)

  return (
    <li className={styles.todoItem}>
              <Checkbox onToggle={onToggle} todo={todo} />
              <span className={todo.completed? styles.done : null}>{todo.title}</span>
              <DeleteButton onDelete={onDelete} todo={todo} />
     </li>
  )
}

export default TodoItem