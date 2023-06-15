import React from 'react'
import { Outlet, Link } from "react-router-dom";
import styles from './css/MenuLink.module.css'

function MenuLink() {
  return (
    <div className={styles.contentMenuLink}>
        <h1>MenuLink</h1>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/loginapi">Login Api</Link>
        <Link to="/userlist">User List</Link>
        <Link to="/datatable">Datatable</Link>
        <Link to="/upimg">Upload & Preview Img</Link>
        <Link to="/uselocation">Test Uselocation</Link>
    </div>
  )
}

export default MenuLink