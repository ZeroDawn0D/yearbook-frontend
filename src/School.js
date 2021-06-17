//import logo from './logo.svg';
// 4a4d4e gray
//montserrat
//#6f9ca6
import React from 'react';
import './App.css';



class School extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isBlur: false
    }
    this.makeBlur = this.makeBlur.bind(this);
  }

  render(){
      return(
        <div className="School">
          <div id = "container">
            <div id = "enter-button">
              ENTER
            </div>
          </div>
          <img
            onClick = {this.makeBlur}
            src={"./school.png"} 
            id = "schoolImage" 
            alt = "" 
          />
        </div>
        );
  }

  makeBlur(){
    if(this.state.isBlur){
      this.setState({
        isBlur: false
      })
      document.getElementById("schoolImage").style.filter = "blur(0px)";
      document.getElementById("enter-button").style.visibility= "hidden";
      document.getElementById("enter-button").style.opacity = "0";
     // document.getElementById("schoolImage").style.fontSize = "0px";
    }
    else{
      this.setState({
        isBlur: true
      })
      document.getElementById("schoolImage").style.filter = "blur(8px)";
      document.getElementById("enter-button").style.visibility = "visible";
      document.getElementById("enter-button").style.opacity = "1";
     // document.getElementById("schoolImage").style.fontSize = "64px";
    }
  }
}



export default School;
