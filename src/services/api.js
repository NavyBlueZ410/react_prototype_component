import axios from "axios";

export function login(username,password) {
    return new Promise(resolve => {
        let url = `https://www.melivecode.com/api/login`
        let body = {
            "username":username,
            "password":password
        }
        let headers = {
            'Content-Type': 'application/json'
        }
        axios.post(url,body,{ headers: headers }).then(res => {
            resolve(res)
        }).catch((err) => {
            resolve(err)
        })
    })
}

export function getUser(){
    return new Promise(resolve => {
        let url = `https://www.melivecode.com/api/users`
        let headers = {}
        axios.get(url,{headers:headers}).then(res => {
            resolve(res)
        }).catch((err) => {
            resolve(err)
        })
    })
}

export function createUser(fname,lname,username,password,email,avatar){
    return new Promise(resolve => {
        let url = `https://www.melivecode.com/api/users/create`
        let body = {
            "fname": fname,
            "lname":lname,
            "password":password,
            "username":username,
            "email":email,
            "avatar":avatar
        }
        let headers = {
            'Content-Type': 'application/json'
        }
        axios.post(url,body,{headers:headers}).then(res => {
            resolve(res)
        }).catch((err) => {
            resolve(err)
        })
    })
}

export function updateUser(id,fname,lname,username,password,email,avatar){
    return new Promise(resolve => {
        let url = `https://www.melivecode.com/api/users/create`
        let body = {
            "id":id,
            "fname": fname,
            "lname":lname,
            "password":password,
            "username":username,
            "email":email,
            "avatar":avatar
        }
        let headers = {
            'Content-Type': 'application/json'
        }
        axios.put(url,body,{headers:headers}).then(res => {
            resolve(res)
        }).catch((err) => {
            resolve(err)
        })
    })
}

export function deleteUser(id){
    return new Promise(resolve => {
        let url = `https://www.melivecode.com/api/users/create`
        let body = {
            "id":id
        }
        let headers = {
            'Content-Type': 'application/json'
        }
        axios.put(url,body,{headers:headers}).then(res => {
            resolve(res)
        }).catch((err) => {
            resolve(err)
        })
    })
}

export function findUser(id){
    return new Promise(resolve => {
        let url = `https://www.melivecode.com/api/users/${id}`
        let headers = {}
        axios.get(url,{headers:headers}).then(res => {
            resolve(res)
        }).catch((err) => {
            resolve(err)
        })
    })
}