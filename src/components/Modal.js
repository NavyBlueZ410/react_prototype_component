import React from 'react'
import styles from './css/Modal.module.css'

function Modal(props) {
  const {onClick} = props

  return (
    <div className={styles.contentModal}>
        <div className={styles.modal}>
          Modal<br/>
          <button onClick={onClick}>close modal</button>
        </div>
    </div>
  )
}

export default Modal