import React, { useState, useEffect } from 'react';
import firebase from "../../firebase"
import {useHistory} from 'react-router-dom'
import "./auth.css"

export default function SignUp(){
    const [email,setEmail] = useState()
    const [pass,setPass] = useState()
    const [error,setError] = useState("")

    useEffect(()=>{},[])
    let history = useHistory();

    function signup(){ 
        firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then(()=>{
            history.push('/profile')
        })
        .catch((err)=>{
            console.log(err)
            setError(err.message)
        })
    }
    return(
        <div className="form">
            <h1>Sign up</h1>
            <label>
                email
            </label>
            <input onChange={e=>setEmail(e.target.value)} />
            <label>
                password
            </label>
            <input type="password" onChange={e=>setPass(e.target.value)} />
            <p style={{color:"red"}}> {error}</p>
            <button onClick={signup}>Sign up</button>
        </div>
    )
}