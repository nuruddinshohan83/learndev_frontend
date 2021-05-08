import './UserPost.css'
import { Link } from 'react-router-dom';
export default function UserPost(props){
    console.log(props)
    return(
        <Link to = {`/post/${props.data.id}`} style={{textDecoration:"none"}}>
        <div className="post">
            <div className="text">
                <div className="text-col" >
                    <h3>{props.data.title}</h3>
                    <p>{props.data.post.substr(0, 70)}</p>
                </div>
                <div className="cover-img" style = {{ "background-image" : `url(${props.data.coverimage})`}}> </div>
            </div>
        </div>
        </Link>
    )
}
