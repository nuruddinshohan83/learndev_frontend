import './post.css'
import Comment from "./comment"
import { Link, Router } from 'react-router-dom';
import { useState } from 'react';


export default function Post(props){
    console.log(props.data.userinfo.image)
    //let date = props.data.userinfo.image;
    const [comment,setComment] = useState(false)
    function toggleComment(){
        setComment(el=>!el)
        console.log("comment Clicked")
    }
    return(
        
            <div className="post">
                
                <Link to = {`/post/${props.data.id}`} style={{ textDecoration: 'none' }}>
                    <Link to={`user/${props.data.userinfo.userid}`} style={{ textDecoration: 'none' }}>
                        <div className="user">
                            <div className="img" style = {{
                                "background-image" : `url(${props.data.userinfo.image})`}}></div>
                            <div>
                                <p className="user-name">{props.data.userinfo.username}</p>
                                <p className="upload-time">{"14th Dec"}</p>
                            </div>
                        </div>
                    </Link>
                    {(props.data.forums !== "") &&
                    <>  
                        <p className="forum-name">Forum</p>
                        <p className="forum">Javascript Developers</p>
                        <br/>
                    </>    
                    }
                    {props.data.tags.map(el=>(<Link to={`/tags/${el}`}><p className="tags">{el}</p></Link>))}
                    <div className="text">
                        <div className="text-col" >
                            <h3>{props.data.title}</h3>
                            <p>{props.data.post.substr(0, 70)}</p>
                        </div>
                        <div className="cover-img" style = {{"background-image" : `url('${props.data.coverimage}')`}}> </div>
                    </div>
                </Link>
                <p onClick={toggleComment} className="comment-button">Comment</p>
                {(comment) && <Comment postid={props.data.id} />}
                
            </div>
       
    )
}
