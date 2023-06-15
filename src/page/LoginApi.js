import React from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input'
import { BiUser,BiLockAlt } from "react-icons/bi";
import { useState } from 'react';
import Button from '../components/Button';
import * as api from '../services/api'
import styles from './css/LoginApi.module.css'

function LoginApi() {
    const navigate = useNavigate()
    const [login,setLogin] = useState({
        username:"",
        password:""
    })
    const [validate,setValidate] = useState(false)


    const handleOnChange = (e) => {
        e.preventDefault()
        const {name,value} = e.target
        setLogin({...login,[name]:value})

        const isValid = Object.values({
            ...login,
            [name]: value
          }).every((val) => val.trim() !== "");
          setValidate(isValid);
    }

    const handleSubmitLogin = async(e) => {
        e.preventDefault()
        if(!login['username']){
            alert("Please input : username")
            return
        }
        if(!login['password']){
            alert("Please input : password")
            return
        }

        let res =  await api.login(login['username'],login['password'])
        if(res['status'] === 200){
            let data = res['data']['user']
            await localStorage.setItem('accessToken',res['data']['accessToken'])
            await localStorage.setItem('avart',data['avatar'])
            await localStorage.setItem('email',data['email'])
            await localStorage.setItem('fname',data['fname'])
            await localStorage.setItem('lname',data['lname'])
            await localStorage.setItem('email',data['email'])
            navigate('/homepageapi');

        }else{
            alert(`${res['response']['data']['message']} Please check again.`)
            return
        }
    }

  return (
    <div className={styles.contentLoginApi}>
        <h1>Login by Api</h1>
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
            onChange={handleOnChange}
        />
        <Button
            text={"Login"}
            onClick={handleSubmitLogin}
            validate={validate}
        />
    </div>
  )
}

export default LoginApi