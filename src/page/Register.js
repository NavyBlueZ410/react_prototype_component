import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import styles from './css/Register.module.css'
import Select from '../components/Select'
import Input from '../components/Input'
import { BiUser,BiLockAlt } from "react-icons/bi";
import Button from '../components/Button';

function Register() {

  const navigate = useNavigate();
  const [optionGender,setOptionGender] = useState([
    {
      id:"g01",
      gender:"male"
    },
    {
      id:"g02",
      gender:"female"
    }
])

  const [register,setRegister] = useState({
    username:"",
    password:"",
    confirm_password:"",
    nickname:"",
    gender:""
  })

  const [validate,setValidate] = useState(false)

  const handleOnChange = (e) => {
    e.preventDefault()
    const { name,value } = e.target
    setRegister({...register,[name]:value})

    const isValid = Object.values({
      ...register,
      [name]: value
    }).every((val) => val.trim() !== "");
    setValidate(isValid);
  }


  const handleSubmitRegister = () => {
    console.log("Submit Register")

    if(!register['username']){
      alert("Please input: username")
      return
    }
    if(!register['password']){
      alert("Please input: password")
      return
    }
    if(!register['confirm_password']){
      alert("Please input: confirm_password")
      return
    }
    if(!register['nickname']){
      alert("Please input: nickname")
      return
    }
    if(!register['gender']){
      alert("Please select: gender")
      return
    }
    if(register['password'] !== register['confirm_password']){
      alert("Password & Confrim Not match. Please check again.")
      return
    }
    console.log("you can register.....")
    navigate('/login');
  }

  return (
    <div className={styles.contentRegister}>
        <h1>Register</h1> 
        <Input 
            style={{marginBottom:"1rem"}}
            icon={<BiUser/>} 
            type={"text"} 
            name={"username"} 
            placeholder={"username"}
            value={register['username']}
            onChange={handleOnChange}
         />
         <Input 
            style={{marginBottom:"1rem"}}
            icon={<BiLockAlt/>} 
            typeInput="password"
            type={"password"} 
            name={"password"} 
            placeholder={"password"}
            value={register['password']}
            onChange={handleOnChange}
         />
         <Input 
            style={{marginBottom:"1rem"}}
            icon={<BiLockAlt/>} 
            typeInput="password"
            type={"password"} 
            name={"confirm_password"} 
            placeholder={"confirm password"}
            value={register['confirm_password']}
            onChange={handleOnChange}
         />
         <Input 
            style={{marginBottom:"1rem"}}
            icon={<BiUser/>} 
            type={"text"} 
            name={"nickname"} 
            placeholder={"nickname"}
            value={register['nickname']}
            onChange={handleOnChange}
         />
        <Select
          style={{marginBottom:"1rem"}}
          value={register['gender']}
          name={"gender"}
          defalut={{value:"",label:"Please select gender"}}
          onChange={handleOnChange}
          list={optionGender}
        />
        <Button
          style={{marginTop:"3rem"}}
          text={"Register"}
          onClick={handleSubmitRegister}
          validate={validate}
        />
        <div className={styles.contentText}>
            <Link to="/login">Go Back</Link>
        </div>
    </div>
  )
}

export default Register