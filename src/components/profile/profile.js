import { useContext, useState } from 'react'
import {AuthContext} from '../auth/auth'
import firebase from '../../firebase'
import {useHistory} from 'react-router-dom'
import './profile.css'

export default function Porfile()
{
    let history = useHistory()
    const[name,setName] = useState("")
    const[image,setImage] = useState("")
    const[bio,setBio] = useState("")
    const[from,setFrom] = useState("")


    let ref = firebase.firestore().collection("users")
    const currentUser = useContext(AuthContext)
    const userid = firebase.auth().currentUser.uid;
    console.log(userid)

    function updateUserInfo(obj){
        ref.doc(userid).set(obj)
        .catch(err=>console.log(err))
        history.push(`/user/${userid}`)
    }
    return(
        <div className="form">
            <h2>Update your user info</h2>
            <label>
                Name 
            </label>
            <input onChange={e=>setName(e.target.value)}></input>
            <label>
                Image 
            </label>
            <input onChange={e=>setImage(e.target.value)}></input>
            <label>
                About your self 
            </label>
            <input onChange={e=>setBio(e.target.value)}></input>
            <label>
                From 
            </label>
            <input onChange={e=>setFrom(e.target.value)}></input>
            <div>
            <button onClick={()=>updateUserInfo({name,image,bio,from})}>Upload</button>
            </div>
        </div>
    )
}
//https://i.imgur.com/n0mCTlL.jpg