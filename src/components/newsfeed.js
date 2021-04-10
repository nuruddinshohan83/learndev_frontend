import React from 'react';
import './newsfeed.css'
import Post from './post'

export default class Newsfeed extends React.Component{
    render(){
        return(
            <div className="newsfeed col">
                <h2 className="newsfeed-heading">News Feed</h2>
                <Post />

                <Post />
            </div>
        )
    }
    
} 