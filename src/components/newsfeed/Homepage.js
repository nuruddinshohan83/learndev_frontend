import "./Homepage.css";
import Nav from "./nav"
import Newsfeed from "./newsfeed"
import Sidebar from "./sidebar"



export default function HomePage(props){
    console.log(props)
    return(
        <div className="container main-con">
            <Nav />
            <Newsfeed />
            <Sidebar/>
        </div>
    )
}