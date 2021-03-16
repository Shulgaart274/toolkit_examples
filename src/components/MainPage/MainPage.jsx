import React from 'react'
import styles from "./MainPage.module.css"
import TextInput from "../TextInput/TextInput"
import Footer from "../Footer/Footer"
import ToggleAll from '../ToggleAll/ToggleAll'
import TodoList from "../TodoList/TodoList"



const MainPage = () => {

    return (
      
      <div className={styles.container}>
         <h1 className={styles.title}>todos</h1>
         <TextInput />
         <ToggleAll />
         <TodoList />
         <Footer />
      </div>
    )
}

export default MainPage