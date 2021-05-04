import React, { useEffect, useState } from 'react';
import './newsfeed.css'
import Post from './post'
import firebase from "../../firebase"
import { Link } from 'react-router-dom';


export default function Newsfeed(){
    const ref = firebase.firestore().collection("posts")
    const [postData,setPostData] = useState([])

    function getData(){
        ref.onSnapshot((querySnapshot) => {
            var items = [];
            querySnapshot.forEach((doc) => {
                let temp = doc.data()
                temp.id = doc.id
                items.push(temp);
            }); 
            setPostData(items)
        });
    }
    useEffect(()=>{
        getData()
    },[])
    return(
    <div className="newsfeed col">
        <h2 className="newsfeed-heading">News Feed</h2>
        <Link to="/uploadpost"><button className="post-upload">Upload post</button></Link>
        {
            postData.map(ele=>{
                return(
                    <Post data = {ele} />
                )
            })
        }
    </div>
    )
}