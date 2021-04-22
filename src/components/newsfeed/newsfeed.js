import React from 'react';
import './newsfeed.css'
import Post from './post'

export default class Newsfeed extends React.Component{
    constructor(){
        super()
        this.state = {
            data : []
        }
    }
    fetchApi(){
        console.log("api called")
        let url = "http://localhost:3030/testposts"
        fetch(url)  
            .then(response => response.json())
            .then(json=>{
                this.setState({
                    data : json
                })
                //console.log(this.state.data)
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