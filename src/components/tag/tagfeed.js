import React, { useEffect, useState } from 'react';
import '../newsfeed/newsfeed.css'
import Post from '../newsfeed/post'
import firebase from "../../firebase"
import { Link, useParams } from 'react-router-dom';


export default function Tagfeed(){
    let tag = useParams()
    console.log("🚀 ~ file: tagfeed.js ~ line 10 ~ Tagfeed ~ tag", tag)
    const ref = firebase.firestore().collection("posts").where("tags", "array-contains", `${tag.tagname}`)
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
        <h2 className="tag-heading">{tag.tagname}</h2>
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