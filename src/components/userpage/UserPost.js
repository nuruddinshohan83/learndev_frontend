import './UserPost.css'
import { Link } from 'react-router-dom';
export default function UserPost(props){
    return(
        <Link to = {`post/`}>
        <div className="post">
            <div className="text">
                <div className="text-col" >
                    <h3>test</h3>
                    <p>test</p>
                </div>
                <div className="cover-img"> </div>
            </div>
        </div>
        </Link>
    )
}
