import { useEffect, useState,useContext } from 'react' 
import { Link } from 'react-router-dom'
import './topnav.css'
import firebase from "../firebase"
import {AuthContext} from './auth/auth' 

function Topnav(){
    const currentUser = useContext(AuthContext)


    
    let loggedIn
    if(currentUser){
        loggedIn = true;
    }
    else if(currentUser == null) {loggedIn = false}
    console.log(currentUser)
   console.log(loggedIn)

    function singOut(){
        firebase.auth().signOut()
    }
   
    return(
        <div className= "top-nav">
            <img src="/img/logo.svg" />
            <div>
            {(loggedIn == false) && <Link to="/signin"><button className="top-nav-button">Sign In</button></Link>}
            {(loggedIn == false) && <Link to="/signup"><button className="top-nav-button">Sign In</button></Link>}
            
            </div>
            {(loggedIn == true) && <div className= "top-nav-leftcomp"> 
                <img className="top-nav-propic" src= "/img/profile.svg" />
                <img className="top-nav-notification" src= "/img/notification.svg"/>
                <button onClick={singOut}>Log out</button>
            </div>}
             
        </div>
    )
}
export default Topnav;