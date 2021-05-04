import { useParams } from "react-router"
import React, { useState, useEffect } from 'react';
import firebase from '../../firebase'

export default function Postpage(){
    let id= useParams();
    console.log(id.postId)

    let refPost = firebase.firestore().collection("posts").doc(id.postId)
    const[postData,setPostData] = useState("")
    useEffect(()=>{
      refPost.get()
      .then(ele=>(setPostData(ele.data())))
    
    },[]);
    return(
      <div id="post">
        <h1>{postData.title}</h1>
        <p> {postData.post}}</p>
      </div>
      
    )
  }