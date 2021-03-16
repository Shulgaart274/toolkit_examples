import React from 'react'
import styles from './DeleteButton.module.css'



const DeleteButton = ({onDelete}) => {
 
  return (
    <button className={styles.destroy} onClick={onDelete} />
  )
}




export default DeleteButton