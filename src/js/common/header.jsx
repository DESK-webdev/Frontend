import React from 'react'

function Header(){
    return(
        <div className="navbar">
            <div className="brandname">
                <a href={"./"}>SomeTitle</a>
            </div>
            <ul className="navlinks">
                <li><a href={"./app.jsx"}>Home</a></li>
                <li><a href={"./app.jsx"}>Foods</a></li>
                <li><a href={"./app.jsx"}>Hotels</a></li>
                <li><a href={"./app.jsx"}>Log in</a></li>
            </ul>
            <div className=""></div>
        </div>
    )
}

export default Header;