import './post.css'


export default function Post(props){
    return(
        <div className="post">
            <div className="user">
                <div className="img" style = {{
                    "background-image" : `url('https://picsum.photos/id/${props.data.id}/300')`}}></div>
                <div>
                    <p className="user-name">{props.data.author}</p>
                    <p className="upload-time">{props.data.uptime}</p>
                </div>
            </div>
            <div className="text">
                <div className="text-col" >
                    <h3>{props.data.title}</h3>
                    <p>{props.data.des}</p>
                </div>
                <div className="cover-img"> </div>
            </div>
        </div>
    )
}
