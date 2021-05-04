import React, { useEffect, useState } from 'react';
import firebase from './firebase'

export default function Test(){
    const [data, setData] = useState([]);   
    const ref = firebase.firestore().collection("test")
    function getData(){
        ref.onSnapshot((querySnapshot) => {
            var items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
                //console.log(doc.data())
            });
            console.log(items)
            setData(items)
        });
    }

    useEffect(()=>{
        getData()
    },[])

    console.log("🚀 ~ file: test.js ~ line 7 ~ Test ~ ref", ref)
    return(
        <>
            <h1>Test database</h1>
            {data.map((el)=>( 
                <p>{el.num}</p>
    ))}
        </>
    )
}