import {Component} from 'react';
import './Yearbook.css';

export default class Yearbook extends Component{
	constructor(props){
		super(props);
		this.state = {
			choice: "i",
			rolls: "",
			link: "https://slsyearbook.herokuapp.com/",
			names: []
			}; // i a b c h
		this.loadRoll = this.loadRoll.bind(this);
		this.loadName = this.loadName.bind(this);
	}

	loadName(){
		this.setState({names:[]})
		let rollstr = this.state.rolls;
		let sec = this.state.choice;
		let base = this.state.link + sec + "/";
		console.log("IN LOAD NAME FUNC: " + rollstr);
		let rollarr = rollstr.split(" ");
		let namearr = [];
		for(var i = 0; i < rollarr.length; i++){
			let cur_rol = rollarr[i];
			let cur_link = base + cur_rol + "/name";
			var that = this;
			fetch(cur_link)
			.then(res => res.text())
			.then(data =>{
				that.setState({names: that.state.names.concat(data)});
			})
		}
	}

	loadRoll(){
		this.setState({rolls:""});
		console.log("load roll called: " + this.state.choice)
		var that = this; // this here has access to setState
		fetch(this.state.link + this.state.choice)
		.then(res => res.text())
		.then(data => {
			console.log("DATA: " + data);
			that.setState({rolls:data}, that.loadName);
		})


	}

	render(){
		return(
			<div id = "yearbook">
				<div id = "makeSticky">

					<div id = "header">
						SALT LAKE SCHOOL YEARBOOK 2021-2022
					</div>
					<div id = "navbar">
						<div className = "blackBox" id = "info-button"
						onMouseEnter = {() => {document.getElementById("info-button").style.backgroundColor = "#2a4c9e";}}
						onMouseLeave = {() => {document.getElementById("info-button").style.backgroundColor = "#000000";}}
						onClick = {() => {
							this.setState({choice:"i"});
						}} >
							MORE INFO
						</div>
						<div className = "blackBox" id = "a-button"
						onMouseEnter = {() => {document.getElementById("a-button").style.backgroundColor = "#2a4c9e";}}
						onMouseLeave = {() => {document.getElementById("a-button").style.backgroundColor = "#000000";}}
						onClick = {() => {
							this.setState({choice:"a"},this.loadRoll);
							
						}}>
							XII Sc. A
						</div>
						<div className = "blackBox" id = "b-button"
						onMouseEnter = {() => {document.getElementById("b-button").style.backgroundColor = "#2a4c9e";}}
						onMouseLeave = {() => {document.getElementById("b-button").style.backgroundColor = "#000000";}}
						onClick = {() => {
							this.setState({choice:"b"},this.loadRoll);
						}}>
							XII Sc.B
						</div>
						<div className = "blackBox" id = "h-button"
						onMouseEnter = {() => {document.getElementById("h-button").style.backgroundColor = "#2a4c9e";}}
						onMouseLeave = {() => {document.getElementById("h-button").style.backgroundColor = "#000000";}}
						onClick = {() => {
							this.setState({choice:"h"}, this.loadRoll);
					}}>
							XII Humanities
						</div>
						<div className = "blackBox" id = "c-button"
						onMouseEnter = {() => {document.getElementById("c-button").style.backgroundColor = "#2a4c9e";}}
						onMouseLeave = {() => {document.getElementById("c-button").style.backgroundColor = "#000000";}}
						onClick = {() => {
							this.setState({choice:"c"}, this.loadRoll);
						}}>
							XII Commerce
						</div>
					</div>
				</div>

				<Content choice = {this.state.choice} rolls = {this.state.rolls} names = {this.state.names} />
			</div>
			);
	}
}


class Content extends Component{
	constructor(props){
		super(props)
	}

	render(){
		if(this.props.choice==="i")
			return <Info />
		else if(this.props.rolls==="")
			return <Loading />
		else
			return <Section sec = {this.props.choice} rolls = {this.props.rolls.split(" ")} names = {this.props.names}/>
	}
}




class Info extends Component{
	render(){
		return(
				<div id = "info">
					<div className = "info-head">
						WANT TO ADD YOUR DETAILS?
					</div>
					<div className = "info-body">
						This webpage is intended to act as a yearbook for Salt Lake School ISC batch of 2022.
						Please fill out this google form. 
						Also check out the desktop version of the webpage for some extra landing page art.
					</div>
					<hr/>
					<div className = "info-head">
						WHY A YEARBOOK?
					</div>

					<div className = "info-body">
						Why not?
					</div>
					<hr / >
					<div className = "info-head">
						ABOUT US
					</div>
					<div className = "info-body">
						<b>Artist:</b> Sayudh Das, XII Sc. B
						<br />
						<b>Programmer:</b> Umang Majumder, XII Sc. B
						<br />
						Check out more pixel art or this project's Github page.
					</div>
				</div>
		);
	}
}

class Loading extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(<div id = "loading"> LOADING CONTENT...</div>)
	}
}



class Section extends Component{
	constructor(props){
		super(props);
		//this.loadRoll = this.loadRoll.bind(this);
		console.log("CONSTRUCTOR CALLED: " + this.props.sec);
	}

	printCards(){
		var toReturn = [];
		for(let i = 0; i <  this.props.names.length; i++){
			toReturn.push(
				<Card 
					key = {this.props.names[i]} 
					name = {this.props.names[i]} 
					roll = {this.props.rolls[i]}
					sec = {this.props.sec}/>
				);
		
		}
		return toReturn;
	}
	render(){
		return(
			<div id = "card-container"> 
				{this.printCards()}
			</div>
			);
	}
}

class Card extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className = "card" key = {this.props.name}>
				Name: {this.props.name}
				<br />
				Roll: {this.props.roll}
				<br />
				Class: 12 {this.props.sec.toUpperCase()}
			</div>
			);
	}
}