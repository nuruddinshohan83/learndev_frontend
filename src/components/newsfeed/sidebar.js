import React from 'react';
import './sidebar.css'
export default class Sidebar extends React.Component{
    render()
    {
        return(
            <div className="sidebar col">
                <h2 className="sidebar-heading">Topics</h2>
                <div className="sidebar-con">  
                    <h3>Trending posts</h3>
                    <p></p>
                </div>
            </div>
        )
    }
} 