import './nav.css'
function Nav(props){
    return(
        <nav className = "nav-bar col">
            <h2 className="nav-heading">
                Menu
            </h2>
            <ul>
                <li>
                    <img src= "/img/home.svg"></img>
                    <a href= "#">Home</a>
                </li>
                <li>
                    <img src= "/img/forum.svg"></img>
                    <a href= "#">Forums</a>
                </li>
                <li>
                    <img src= "/img/topic.svg"></img>
                        <a href= "#">Topics</a>
                </li>
                <li>
                    <img src= "/img/dis.svg"></img>
                        <a href= "#">Discussion</a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;