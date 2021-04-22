import React, { useState } from 'react';
import Navpopup  from './Navpopup.js' ;
import './nav.css'
    
function Nav(props){
    const [status,toggleStatus] = useState(false)
    function ddHandeler(){
        console.log("ddhandler function called")
        toggleStatus(()=>!status)
    }
    return(
        <nav className = "nav-bar col">
            <h2 className="nav-heading">
                Menu
            </h2>
            <ul>
                <li onClick= {ddHandeler}>
                    <img src= "/img/home.svg"></img>
                    <a href= "#">Home</a>
                    
                </li>
                <li onClick= {ddHandeler}>
                    <img src= "/img/forum.svg"></img>
                    <a href= "#">Forums</a>
                    {status && <Navpopup /> }
                </li>
                <li onClick= {ddHandeler}>
                    <img src= "/img/topic.svg"></img>
                        <a href= "#">Topics</a>
                </li>
                <li onClick= {ddHandeler}>
                    <img src= "/img/dis.svg"></img>
                        <a href= "#">Discussion</a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;