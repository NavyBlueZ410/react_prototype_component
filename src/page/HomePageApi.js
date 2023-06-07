import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './css/HomePageApi.module.css'
import { useState } from 'react'
import Button from '../components/Button'
import { useEffect } from 'react';

function HomePageApi() {

  const navigate = useNavigate()
  const [profile,setProfile] = useState({
    avatar:localStorage.getItem("avart"),
    fname:localStorage.getItem("fname"),
    lname:localStorage.getItem("lname"),
    email:localStorage.getItem("email"),
  })

  const handleLogout = async(e) => {
    e.preventDefault()
    await localStorage.clear()
    navigate('/loginapi');
  }

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
        navigate('/loginapi')
    }
  }, []);

  return (
    <div className={styles.contentHomePageApi}>
        <h1>HomePageApi</h1>
        <div className={styles.contentBox}>
            <div className={styles.contentImg}>
                <img src={profile['avatar']} alt='' />
            </div>
            <div>
                <h2>Welcome, {`${profile['fname']} ${profile['lname']}`}</h2>
                <h4>Email : {profile['email']}</h4>
                <Button
                    style={{marginTop:"1rem",width:"50%"}}
                    text={"logout"}
                    onClick={handleLogout}
                    validate={true}
                />
            </div>
        </div>
    </div>
  )
}

export default HomePageApi