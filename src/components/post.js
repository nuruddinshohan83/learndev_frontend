import './post.css'


export default function Post(){
    return(
        <div className="post">
            <div className="user">
                <div className="img"></div>
                <div>
                    <p  className="user-name">Nur Uddin Shohan</p>
                    <p className="upload-time">3rd Apr,21</p>
                </div>
            </div>
            <div className="text">
                <div className="text-col" >
                    <h3>“The sky was cloudless and of a deep dark blue."</h3>
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                </div>
                <div className="cover-img"> </div>
            </div>
        </div>
    )
}
