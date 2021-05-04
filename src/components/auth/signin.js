import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import firebase from "../../firebase"
import "./auth.css"

export default function SignIn(){
    let history = useHistory()
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const [error,setError] = useState("")


    function signin(){
        console.log(email)
        console.log(pass)

        firebase.auth().signInWithEmailAndPassword(email,pass)
        .then(()=>{
            history.push("/")
        })
        .catch((err)=>{
                console.log(err)
                setError(err.message)
            }
        )
    }
    return(
        <div className="form">
            <h1>Sign In</h1>
            <label>
                email
            </label>

            <input onChange={e=> setEmail(e.target.value)} />
            <label>
                password
            </label>
            <p style={{color:"red"}}>{error}</p>
            <input type="password" onChange={e=> setPass(e.target.value)} />
            <button onClick={signin}>Sign in</button>
        </div>
    )
}