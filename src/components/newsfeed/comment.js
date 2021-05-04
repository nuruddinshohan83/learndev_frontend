import './comment.css'
import React, { useState, useEffect,useContext } from 'react';
import {AuthContext} from '../auth/auth'
import firebase from '../../firebase'
import { useHistory } from 'react-router';


export default function Comment(props){

    let history = useHistory()
    let postId = props.postid
    let ref = firebase.firestore().collection("comments").where("postid","==",`${postId}`)
    //console.log(typeof(props.postid))
    //console.log(postId)

    const [comments,setComments] = useState([])
    const [input,setInput] = useState()
    const [uname,setName] = useState("")
    const [pimage,setImage] = useState("")

    const currentUser = useContext(AuthContext)

    useEffect(()=>{
        ref.get().then((querySnapshot)=>{
            console.log(querySnapshot)
            let items=[]
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            //console.log(items)
            setComments(items)
        })
 
    },[])

    let refCom = firebase.firestore().collection("comments")
    let refUser = firebase.firestore().collection("users")
    
    function upComment(){
        if(currentUser !== null){
            refUser.doc(currentUser.uid).get()
            .then(ele=>{
                console.log(ele.data())
                setName(ele.data().name)
                setImage(ele.data().image)
            })
            if(uname!== "" && pimage !=="" ){
                refCom.doc()
                .set({
                    postid: postId,
                    text: input,
                    commenterinfo : {
                        image : pimage,
                        id: currentUser.uid,
                        name : uname
                    }
                
                })
                .then(()=>{
                    history.push('/');
                    console.log("comment uploaded")
                })
            }
        }
    }

    return(
        <div className="comment">
           {comments.map((el)=>{
               return(
                <div className="single-comment">
                    <div className="commenter">
                        <div className="commeter-image" style = {{"background-image" : `url('${el.commenterinfo.image}')`}}></div> 
                        <p>{el.commenterinfo.name}</p>
                    </div>
                    <p className="comment-text">
                        {el.text}
                    </p>
                </div>
               )
           })}

            <label> 
                <input onChange={(e)=>setInput(e.target.value)}></input>
                <button onClick={upComment} style={{display : "block" }}>Submit</button>
            </label>
        </div>
    )
}
