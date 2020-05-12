import React from 'react'

function Main(){
    return(
        <div className="main">
             <div className="textdiv">
                <h1>Welcome to our site !</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam totam, soluta sint magnam ducimus iste exercitationem laudantium praesentium!</p>
             </div>
             <div className="imgdiv">
                 <img src={require("../assets/header-img.jpg")} alt=""/>
             </div>
            
        </div>
    )
}

export default Main;