import './topnav.css'
function Topnav(){
    return(
        <div className= "top-nav">
            <img src="/img/logo.svg" />
            <div className= "top-nav-leftcomp"> 
                <img className="top-nav-propic" src= "/img/propic.png" />
                <img className="top-nav-notification" src= "/img/notification.svg"/>
                <input className="top-nav-search" type="text" id="" name="" value="Search" /><br />
            </div> 
        </div>
    )
}
export default Topnav;