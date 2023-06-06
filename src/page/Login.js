import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import styles from './css/Login.module.css'
import Input from '../components/Input'
import { BiUser,BiLockAlt } from "react-icons/bi";
import Button from '../components/Button';


function Login() {
  const fakeUser = {username:"NavyBlueZ",password:"410"}

  const [login,setLogin] = useState({
    username: "",
    password: ""
  })

  const [validate,setValidate] = useState(false)

  const handleOnChange = (e) => {
    // console.log(e.target)
    e.preventDefault()
    const { name,value } = e.target
    setLogin({...login,[name]:value})
    
    const isValid = Object.values({
      ...login,
      [name]: value
    }).every((val) => val.trim() !== "");
    // console.log(isValid)
    setValidate(isValid);
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    if(!login['username']){
      alert("Please input: username")
      return
    }
    if(!login['password']){
      alert("Please input: password")
      return
    }
    if(login['username'] !== fakeUser['username'] && login['password'] !== fakeUser['password']){
      alert('Something wrong? Please check username && password again.')
      return
    }else{
      console.log("you can login.....")
    }
  }

  return (
    <>
      <span className={styles.titleContent}>
        Prototype Code Component <br/>
        This pototype not support responsive
      </span>
      <div className={styles.contentLogin}>
          <h1>Login</h1>
          <div className={styles.contentLink}>
            <Link to="/datatable" >Datatable</Link>
          </div>
          <Input 
            style={{marginBottom:"1rem"}}
            icon={<BiUser/>} 
            type={"text"} 
            name={"username"} 
            placeholder={"username"}
            value={login['username']}
            onChange={handleOnChange}
             />
          <Input 
            style={{marginBottom:"1rem"}}
            icon={<BiLockAlt/>} 
            typeInput={"password"} 
            type={"password"} 
            name={"password"} 
            placeholder={"password"}
            value={login['password']}
            onChange={handleOnChange} />
            <div className={styles.contentText}>
                <Link to="/register" >Register?</Link>
                <Link to="">Forgot password?</Link>
            </div>
            <Button 
              style={{marginTop:"3rem"}}  
              text={"Login"} 
              onClick={handleSubmitLogin}
              validate={validate}/>
      </div>
    </>
  )
}

export default Login