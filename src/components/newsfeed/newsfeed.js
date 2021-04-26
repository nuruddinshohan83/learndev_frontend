import React, { useState } from 'react';
import './newsfeed.css'
import Post from './post'

export default class Newsfeed extends React.Component{
    constructor(props){
        super(props)
        this.props = {match :{}}
        this.state = {
            data : []
        }
    }
    fetchApi(){
        let url = "http://localhost:3030/testposts"
        fetch(url)  
            .then(response => response.json())
            .then(json=>{
                this.setState({
                    data : json
                })
            })
    }
    componentDidMount(){
        this.fetchApi()
    }
    render(){
        let data = this.state.data;
        return(
            <div className="newsfeed col">
                <h2 className="newsfeed-heading">News Feed</h2>
                {
                    data.map(ele=>{ 
                        return <Post data = {ele} />
                    })
                }
            </div>
        )
    }
    
} 

function ModNewsfeed(){
    const [apidata,apiCall] = useState({})
    let data = {}
    return(
        <div className="newsfeed col">
            <h2 className="newsfeed-heading">News Feed</h2>
            {
                data.map(ele=>{ 
                    return <Post data = {ele} />
                })
            }
        </div>
    )

}