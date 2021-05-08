import "../newsfeed/Homepage.css";
import Nav from "../newsfeed/nav"
import Newsfeed from "./tagfeed"
import Sidebar from "../newsfeed/sidebar"



export default function Tag(props){
    console.log(props)
    return(
        <div className="container main-con">
            <Nav />
            <Newsfeed />
            <Sidebar/>
        </div>
    )
}