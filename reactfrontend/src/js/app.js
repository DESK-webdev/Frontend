import React,{Component} from 'react';

import Component from './component'; 


class App extends Component{

    constructor(){
        super();
        this.state={
            todos:Todolistdata
        }
    }

    render(){
     	
	return(
            <div className="appcomponent">
                <Component image={require("../assets/nature.jpg")}/>
                <Component image={require("../assets/asunset.jpg")}/>
                <Component image={require("../assets/wing.jpg")}/>
                <Component image={require("../assets/man.jpeg")}/>
                <Component image={require("../assets/sun.cms")}/>          
            
            </div> 
   		);
export default App;




