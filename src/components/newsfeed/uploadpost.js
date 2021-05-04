import "./uploadpost.css"
import React, { useContext, useEffect, useState } from 'react';
import {AuthContext} from '../auth/auth'
import firebase from '../../firebase'
import { useHistory } from "react-router";

export default function UploadPost(){
    const currentUser = useContext(AuthContext)
    //console.log("🚀 ~ file: uploadpost.js ~ line 9 ~ UploadPost ~ currentUser", currentUser)
    let history = useHistory();

    const [ptitle,setTitle] = useState("")
    const [ptags,setTags] = useState([])
    const [pforum,setForum] = useState("")
    const [postText,setPost] = useState("")
    const [error,setError] = useState("")
    const [uname,setName] = useState("")
    const [pimage,setImage] = useState("")

    let refPost = firebase.firestore().collection("posts")
    let refUser = firebase.firestore().collection("users")

    useEffect(()=>{
        if(currentUser !== null){
            console.log("current user not null")
            
        }
    },[])

    function fromSub(){
        if(currentUser === null){
            setError("Login In First")
        }
        else{
            refUser.doc(currentUser.uid).get()
            .then(ele=>{
                console.log(ele.data())
                setName(ele.data().name)
                setImage(ele.data().image)
            })
            if(uname!== "" && pimage !=="" ){
                refPost.doc()
                .set({
                    forums:pforum,
                    title:ptitle,
                    tags : [ptags],
                    post : postText,
                    userinfo : {
                        image : pimage,
                        userid: currentUser.uid,
                        username : uname
                    }
                
                })
                .then(()=>{
                    history.push("/")
                })
            }
            
            
            
            



            
        }
    }

    return(
        <div className="form">
            <label>
                Post Title 
            </label>
            <input onChange={ele=>{setTitle(ele.target.value)}} />
            <label>
                Tags
            </label>
            <input onChange={ele=>{setTags(ele.target.value)}} />
            <label>
                Forum
            </label>
            <input onChange={ele=>{setForum(ele.target.value)}} />

            <label>
                Post  
            </label>
            <textarea onChange={ele=>{setPost(ele.target.value)}} />
            <p> {error}</p>

           <button onClick={fromSub}>
               Upload
            </button>
        </div>
    )
}