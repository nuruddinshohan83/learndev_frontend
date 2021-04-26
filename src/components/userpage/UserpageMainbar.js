import  './UserpageMainbar.css'
import React, { useEffect, useState } from 'react';
import UserPost from './UserPost';

import { useParams } from 'react-router';

function UserpageMainbar(){
    let id = useParams();
    let url = `http://localhost:3030/usersmod/${id.userId}`
    let url2= `http://localhost:3030/postsmod?user.id=${id.userId}`
    console.log("🚀 ~ file: UserpageMainbar.js ~ line 11 ~ UserpageMainbar ~ url2", url2)
    console.log("🚀 ~ file: UserpageMainbar.js ~ line 10 ~ UserpageMainbar ~ id", id)
    const[apidata,setApidata] = useState({})
    const[userpost,setUserpost] = useState([])
    
    useEffect(()=>{
        userApi(url)
        userPostApi(url2)
    },[])

    function userApi(userurl){
        fetch(userurl)
        .then(response=>response.json())
        .then(json=>{
            setApidata(()=>json)
            console.log(apidata)
            console.log(`user api called`)
        })
    }
    function userPostApi(posturl){
        fetch(posturl)
        .then(response=>response.json())
        .then(json=>{
            setUserpost(()=>json)
            console.log(userpost)

        })
    }

        return (
            <div className= "col userpage-mainbar">
                <div className="proimg"  style ={{backgroundImage:'url(https://picsum.photos/id/2/300)'}} />
                <h1>{`${apidata.name}`}</h1>
                <p>Test</p>
                {userpost.map(ele=>{
                    return  <UserPost data = {ele} />
                })}
                
            </div>

        ); 
}
 
export default UserpageMainbar;

