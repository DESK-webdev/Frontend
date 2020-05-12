import React from 'react'
import './css/app.css';
import Header from './common/header'
import Main from './common/main'
import Search from './common/search'
import Images from './common/images'
import Footer from './common/footer'


function App(){
    return(
        <div className="foodreact">
            <Header />
            <Main />
            <Search />
            <Images />
            <Footer />
        </div>
    )
}

export default App;