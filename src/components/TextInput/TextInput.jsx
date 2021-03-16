import React, {useState} from 'react'
import styles from './TextInput.module.css'
import {connect} from 'react-redux'
// import {createTodo} from '../../redux/action/todosAction'
// import {createTodo} from "../../redux/reducer/toolkitReducer"
import {createTodo} from "../../redux/toolkitSlice"
 

const TextInput = (props) => {
   const [value, setValue] = useState("")
 
   const addTodo = () => {
      const title = value;

      const todo = {
        id: Date.now(),
        title: title,
        completed: false,
      }

      const action = createTodo(todo)
      props.dispatch(action)
   }

   const handleChange = e => setValue(e.target.value)

   const submitHandler = (event) => {
     event.preventDefault();

     addTodo();
     setValue('');
   }

  return (
    <form className={styles.form} id="form" onSubmit={submitHandler}>
          <input
            type="text"
            className={styles.input}
            name="title"
            form="form"
            value={value}
            onChange={handleChange}
            placeholder="What needs to be done?"
            required
          />
        </form>
  )
}

export default connect(null,null)(TextInput)