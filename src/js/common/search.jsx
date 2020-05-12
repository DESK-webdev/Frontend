import React from 'react'

function Header(){
    return(
        <div className="search">
            <div >
                <form className="searchbox" action="./">
                    <input className="searchtab" type="text"/>
                    <button>Search</button>
                </form>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Header;