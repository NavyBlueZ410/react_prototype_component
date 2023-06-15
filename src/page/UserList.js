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
  const [buttonSubmit,setButtonSubmit] = useState("Create User")
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
    if(res['status'] === 200){
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
      sortable:true,
    },
    {
      name: "Avatar",
      selector: row=><img className={styles.imgDataTable} src={row.avatar} alt=''/>,
    },
    {
      name: "Name",
      selector: row=>`${row.fname} ${row.lname}`,
      sortable:true
    },
    {
      name: "Setting",
      selector: row=><div><button onClick={() => handleSettingForm("Edit",row.id)}>Edit</button> <button>Delete</button> </div>,
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
    if(res['status'] === 200){
        await alert("Create User Success.")
        window.location.reload();

    }else{
        console.log(res['response']['data']['message'])
    }
  }

  const handleSettingForm = async(form,id) => {
    setButtonSubmit(form)
    let res = ""
    let data = ""
    switch(form) {
      case "Edit":
        res = await api.findUser(id)
        if(res['status'] === 200){
          data = res['data']['user']
          await setCreateUser({
            username:data['username'],
            password:data['password'],
            fname:data['fname'],
            lname:data['lname'],
            email:data['email'],
            avatar:data['avatar']           
          })
          await setValidate(true)
        }
        break;
        case "Create User":
          await setCreateUser({
            username:"",
            password:"",
            fname:"",
            lname:"",
            email:"",
            avatar:""           
          })
          await setValidate(false)
        break;
      default:
    }
  }

  const handleSubmitEditUser = async() => {
    // console.log("Edit User......")
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

    let res = await api.updateUser(createUser['fname'],createUser['lname'],createUser['username'],createUser['password'],createUser['email'],createUser['avatar'])
    if(res['status'] === 200){
        await alert("Edit User Success.")
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
            {
              buttonSubmit === "Create User" ? ("") : 
              (<div className={styles.contentButtonCreateUser}>
              <button onClick={()=>handleSettingForm("Create User")}>Create User</button>
              </div>)
            }
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
                text={buttonSubmit}
                onClick={buttonSubmit === "Create User" ? handleSubmitCreateUser : handleSubmitEditUser}
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