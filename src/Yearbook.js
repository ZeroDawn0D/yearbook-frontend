import {Component} from 'react';
import './Yearbook.css';
export default class Yearbook extends Component{
	constructor(props){
		super(props);
		this.onButtonHoverStart = this.onButtonHoverStart.bind(this);
		this.onButtonHoverStop = this.onButtonHoverStop.bind(this);
		
	}
	onButtonHoverStart(){
		
	}
	onButtonHoverStop(){
		
	}
	componentDidMount(){
		console.log("mounted");
		
	}
	render(){
		return(
			<div id = "yearbook">
				<div id = "header">
					SALT LAKE SCHOOL YEARBOOK 2021-2022
				</div>
				<div id = "navbar">
					
					<div className = "blackBox" id = "info-button"
					onMouseEnter = {() => {document.getElementById("info-button").style.backgroundColor = "#2a4c9e";}}
					onMouseLeave = {() => {document.getElementById("info-button").style.backgroundColor = "#000000";}}>
						MORE INFO
					</div>
					<div className = "blackBox" id = "a-button"
					onMouseEnter = {() => {document.getElementById("a-button").style.backgroundColor = "#2a4c9e";}}
					onMouseLeave = {() => {document.getElementById("a-button").style.backgroundColor = "#000000";}}>
						XII Sc. A
					</div>
					<div className = "blackBox" id = "b-button"
					onMouseEnter = {() => {document.getElementById("b-button").style.backgroundColor = "#2a4c9e";}}
					onMouseLeave = {() => {document.getElementById("b-button").style.backgroundColor = "#000000";}}>
						XII Sc.B
					</div>
					<div className = "blackBox" id = "h-button"
					onMouseEnter = {() => {document.getElementById("h-button").style.backgroundColor = "#2a4c9e";}}
					onMouseLeave = {() => {document.getElementById("h-button").style.backgroundColor = "#000000";}}>
						XII Humanities
					</div>
					<div className = "blackBox" id = "c-button"
					onMouseEnter = {() => {document.getElementById("c-button").style.backgroundColor = "#2a4c9e";}}
					onMouseLeave = {() => {document.getElementById("c-button").style.backgroundColor = "#000000";}}>
						XII Commerce
					</div>
				</div>
				<div id = "info">
					<div id = "info-head">
						WANT TO ADD YOUR DETAILS?
					</div>
					<div id = "info-body">
						This webpage is intended to act as a yearbook for Salt Lake School ISC batch of 2022.
						Please fill out this google form. 
						Also check out the desktop version of the webpage for some extra landing page art.
					</div>
					<hr/>
					<div id = "about-head">
						ABOUT US
					</div>
					<div id = "about-body">
						<b>Artist:</b> Sayudh Das, XII Sc. B
						<br />
						<b>Programmer:</b> Umang Majumder, XII Sc. B
						<br />
						Check out more pixel art or Github page.
					</div>
				</div>
			</div>
			);
	}
}