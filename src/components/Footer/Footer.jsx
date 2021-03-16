import React from 'react'
import styles from './Footer.module.css'
import {useSelector, useDispatch} from "react-redux"
// import {activeTodos, completedTodos, allTodos, deleteCompletedTodos} from "../../redux/action/todosAction"
// import {activeTodos, completedTodos, allTodos, deleteCompletedTodos} from "../../redux/reducer/toolkitReducer"
import {activeTodos, completedTodos, allTodos, deleteCompletedTodos} from "../../redux/toolkitSlice"

const Footer = (props) => {

  const dispatch = useDispatch()

  const todos = useSelector(state => state.toolkitSlice.todos)
 

  const completed = todos.filter(todo => todo.completed === true)

  const activeHandler = () => {
    const action = activeTodos();
    dispatch(action)
  }

  const completedHandler = () => {
    const action = completedTodos()
    dispatch(action)
  }

  const allHandler = () => {
    const action = allTodos()
    dispatch(action)
  }

  const removeCompletedHandler = () => {
    const action = deleteCompletedTodos()
    dispatch(action)
  }

  return (
    <section className={todos.length? styles.todoFilter : 'hidden'}>
    <div className={styles.todoFilterContainer}>
      <span className={styles.todoFilterCounter}>{completed.length} items left</span>
      <ul className={styles.todoFilterList}>
        <li className={styles.todoFilterItem}>
          <button className={styles.todoFilterAll} onClick={allHandler}>All</button>
        </li>
        <li className={styles.todoFilterItem}>
          <button className={styles.todoFilterActive} onClick={activeHandler}>
           Active
            </button>
        </li>
        <li className={styles.todoFilterItem}>
          <button className={styles.todoFilterCompleted} onClick={completedHandler}>
          Completed
            </button>
        </li>
      </ul>
      <span className={styles.todoFilterClear}
        ><button className={completed.length? styles.todoFilterClearall : 'hidden'} onClick={removeCompletedHandler}>
          Clear completed
        </button></span>
    </div>
  </section>
  )
}

export default Footer