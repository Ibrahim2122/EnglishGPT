import React from 'react'
import styles from './Button.module.css';

function Button({children}) {
  return (
    // <div className={styles.btnContainer}>
      
    // </div>
    <button className={styles.btn}>{children}</button>
  )
}

export default Button