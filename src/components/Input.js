import React, { useState } from 'react'
import styles from './css/Input.module.css'
import { BiShow , BiHide } from "react-icons/bi";

function Input(props) {
  const {typeInput,type,value,name,placeholder,onChange,icon,style} = props

  const [clickShowPassword,setClickShowPassword] = useState(false)

  const handleShowPassword = (e) => {
    e.preventDefault()
    // console.log("click handleShowPassword...")
    setClickShowPassword(!clickShowPassword)
  }

  return (
    <div className={styles.ContentInput} style={style}>
      <input 
        className={value? styles.validate : styles.invalidate}
        type={clickShowPassword ? "text" : type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />

      <div className={styles.contentIconInput}>
        {icon}
      </div>

      {typeInput === "password" ? 
      (<div className={styles.showPassword} onClick={handleShowPassword}>
        { clickShowPassword ?  <BiShow/> : <BiHide/> }
        </div>)
       : 
       ("")}

    </div>
  )
}

export default Input