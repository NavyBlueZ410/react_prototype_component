import React from 'react'
import styles from './css/Button.module.css'

function Button(props) {
    const {text,onClick,validate,style} = props

  return (
    <div style={style}>
        <button 
            className={validate ? styles.buttonCustom : styles.buttonCustomInvalidate} 
            onClick={onClick} 
            // disabled={!validate}
            >
                {text}
        </button>
    </div>
  )
}

export default Button