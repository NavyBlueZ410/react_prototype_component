import axios from "axios";

export function login(username,password) {
    return new Promise(resolve => {
        let url = `https://www.melivecode.com/api/login`
        let body = {
            "username":username,
            "password":password
        }
        let header = {
            'Content-Type': 'application/json'
        }
        axios.post(url,body,{ headers: header }).then(res => {
            resolve(res)
        }).catch((err) => {
            resolve(err)
        })
    })
}