import React from 'react'
import styles from "./ToggleAll.module.css"
import {useDispatch, useSelector} from "react-redux"

import {checkAll, uncheckAll} from "../../redux/toolkitSlice"

const ToggleAll = () => {

  const todos = useSelector(state => state.toolkitSlice.todos)

  const dispatch = useDispatch()

  const checkTodo = todos.some(todo => todo.completed === false)

  const check = () => {
    if (checkTodo === true) {
      dispatch(checkAll())
    } else {
      dispatch(uncheckAll())
    }
  }

  return (
    <label className={styles.toggleAll}>
    <input type="checkbox" className={styles.toggleAllCheckbox} onChange={check} />
    <span className={checkTodo? styles.toggleAllSpan : `${styles.toggleAllSpan} ${styles.toggleAllChecked}`}></span>
  </label>
  )
}

export default ToggleAll
