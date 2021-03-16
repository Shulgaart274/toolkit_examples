import React from 'react'
import styles from "./Checkbox.module.css"
import {connect} from 'react-redux'

const Checkbox = ({todo, onToggle}) => {

  return (
    <label className={styles.todoItemCheckbox}>
    <input type="checkbox" onChange={onToggle} checked={todo.completed} />
    <span className={styles.checkmark}></span>
  </label>
  )
}

export default connect(null, null)(Checkbox);