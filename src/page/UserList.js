import React from 'react'
import * as api from '../services/api'
import { useEffect } from 'react'
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import Input from '../components/Input'
import Button from '../components/Button'
import { BiUser,BiLockAlt,BiCreditCard,BiEnvelope,BiCamera } from "react-icons/bi";
import styles from './css/UserList.module.css'

function UserList() {
  const [users,setUsers] = useState([])
  const [createUser,setCreateUser] = useState({
    username:"",
    password:"",
    fname:"",
    lname:"",
    email:"",
    avatar:""
  })
  const [validate,setValidate] = useState(false)

  const getUser = async() => {
    let res = await api.getUser()
    if(res['status'] == 200){
        setUsers(res['data'])
    } 
  }

  useEffect(() => {
    getUser()
  },[])

  const th = [
    {
      name: "ID",
      selector: row=>row.id,
      sortable:true
    },
    {
      name: "Name",
      selector: row=>`${row.fname} ${row.lname}`,
      sortable:true
    }
  ]

  const handleOnChange = (e) => {
    e.preventDefault()
    const {name,value} = e.target
    setCreateUser({...createUser,[name]:value})

    const isValid = Object.values({
        ...createUser,
        [name]: value
      }).every((val) => val.trim() !== "");
      setValidate(isValid)
  }

  const handleSubmitCreateUser =  async() => {
    if(!createUser['username']){
        alert("Please input: username.")
        return
    }
    if(!createUser['password']){
        alert("Please input: password.")
        return
    }
    if(!createUser['fname']){
        alert("Please input: fname.")
        return
    }
    if(!createUser['lname']){
        alert("Please input: lname.")
        return
    }
    if(!createUser['email']){
        alert("Please input: email.")
        return
    }
    if(!createUser['avatar']){
        alert("Please input: Url img.")
        return
    }

    let res = await api.createUser(createUser['fname'],createUser['lname'],createUser['username'],createUser['password'],createUser['email'],createUser['avatar'])
    if(res['status'] == 200){
        await alert("Create User Success.")
        window.location.reload();

    }else{
        console.log(res['response']['data']['message'])
    }
  }

  return (
    <div className={styles.contentUserList}>
        <h1>UserList</h1>
        <div className={styles.cotentCreateUser}>
            <h2>Create User</h2>
            <Input
                style={{marginBottom:"1rem"}}
                icon={<BiUser/>}
                type={"text"}
                placeholder={"username"}
                name={"username"}
                value={createUser['username']}
                onChange={handleOnChange}
            />
            <Input
                style={{marginBottom:"1rem"}}
                icon={<BiLockAlt/>}
                typeInput={"password"}
                type={"password"}
                placeholder={"password"}
                name={"password"}
                value={createUser['password']}
                onChange={handleOnChange}
            />
            <Input
                style={{marginBottom:"1rem"}}
                icon={<BiCreditCard/>}
                type={"text"}
                placeholder={"fname"}
                name={"fname"}
                value={createUser['fname']}
                onChange={handleOnChange}
            />
            <Input
                style={{marginBottom:"1rem"}}
                icon={<BiCreditCard/>}
                type={"text"}
                placeholder={"lname"}
                name={"lname"}
                value={createUser['lname']}
                onChange={handleOnChange}
            />
            <Input
                style={{marginBottom:"1rem"}}
                icon={<BiEnvelope/>}
                type={"text"}
                placeholder={"email"}
                name={"email"}
                value={createUser['email']}
                onChange={handleOnChange}
            />
            <Input
                style={{marginBottom:"1rem"}}
                icon={<BiCamera/>}
                type={"text"}
                placeholder={"Img ( Please input url Img..... )"}
                name={"avatar"}
                value={createUser['avatar']}
                onChange={handleOnChange}
            />
            <Button
                style={{marginBottom:"2rem"}}
                text={"Create User"}
                onClick={handleSubmitCreateUser}
                validate={validate}
            />
        </div>
        <h1>DataTable</h1>
        <DataTable
            columns={th}
            data={users}
            noDataComponent={"No data searching......"}
            pagination
      ></DataTable>
    </div>
  )
}

export default UserList