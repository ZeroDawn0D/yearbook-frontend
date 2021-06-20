//import logo from './logo.svg';
// #4a4a4a  74, 74, 74 gray
//montserrat
//#6f9ca6
import {Component} from 'react';
import './School.css';



class School extends Component{
  constructor(props){
    super(props);
    this.state = {
      isBlur: this.props.isBlurProp
    }
    this.makeBlur = this.makeBlur.bind(this);
    
    this.onHoverEnd = this.onHoverEnd.bind(this);
    this.onHoverStart = this.onHoverStart.bind(this);
  }

  render(){
      return(
        <div className="School">
        <div id = "header-school">
          SALT LAKE SCHOOL YEARBOOK 2021-2022
        </div>
          <div id = "container">
            <div id = "enter-button"
              onClick = {this.props.onClickEnter}
              onMouseEnter = {this.onHoverStart}
              onMouseLeave = {this.onHoverEnd}
            >
              WELCOME
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
  
  onHoverStart(){
    document.getElementById("header-school").style.opacity = "1";
    document.getElementById("schoolImage").style.opacity = "0";
  }
  
  onHoverEnd(){
    document.getElementById("header-school").style.opacity = "0";
    document.getElementById("schoolImage").style.opacity = "1";
  }
  makeBlur(){
    if(this.state.isBlur){
      this.setState({
        isBlur: false
      })
      document.getElementById("schoolImage").style.filter = "blur(0px)";
      document.getElementById("enter-button").style.visibility= "hidden";
      document.getElementById("enter-button").style.opacity = "0";
      //document.getElementById("schoolImage").style.fontSize = "0px";
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
