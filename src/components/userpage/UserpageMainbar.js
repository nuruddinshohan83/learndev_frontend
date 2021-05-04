import  './UserpageMainbar.css'
import React, { useEffect, useState } from 'react';
import UserPost from './UserPost';
import firebase from '../../firebase'

import { useParams } from 'react-router';

function UserpageMainbar(){
    let id = useParams();
    console.log(id)
    let refUser = firebase.firestore().collection("users").doc(id.userId)
    let refPost = firebase.firestore().collection("posts").where("userinfo.userid", "==", `${id.userId}`)


    console.log("🚀 ~ file: UserpageMainbar.js ~ line 10 ~ UserpageMainbar ~ id", id)
    const[userData,setUserData] = useState({})
    const[userPost,setUserPost] = useState([])
    
    useEffect(()=>{
        console.log(refUser)
        refUser.get().then(ele=>{
            setUserData(ele.data())
        })

        refPost.get().then((querySnapshot) => {
            let items=[]
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            });
            setUserPost(items)
        })
    },[])

    
    

        return (
            <div className= "col userpage-mainbar">
                <div className="proimg"  style ={{backgroundImage:`url(${userData.image})`}} />
                <h1>{`${userData.name}`}</h1>
                <p>{`${userData.bio}`}</p>
                <p>{`${userData.from}`}</p>

                {userPost.map(ele=>{
                    console.log(ele)
                    return  <UserPost data = {ele} />
                })}
                
            </div>

        ); 
}
 
export default UserpageMainbar;

