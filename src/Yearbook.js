import {Component} from 'react';
import './Yearbook.css';

export default class Yearbook extends Component{
	constructor(props){
		super(props);
		this.state = {
			choice: "i",
			rolls: "",
			link: "https://slsyearbook.herokuapp.com/",
			names: [],
			modal:false,
			cur_roll:"0",
			cur_name:"",
			cur_quote:"",
			cur_fav: "",
			cur_img: ""
			}; // i a b c h
		this.loadRoll = this.loadRoll.bind(this);
		this.callModal = this.callModal.bind(this);
		this.disableModal = this.disableModal.bind(this);
		this.setCurData = this.setCurData.bind(this);
	}
	callModal(){
		console.log("MODAL CALLED");
		this.setState({modal: true});

	}
	setCurData(r){
		console.log("CURDATA  CALLED: " + r)
		this.setState({cur_roll:r});
		let link = "https://slsyearbook.herokuapp.com/";
		let that = this;
		let query = link + this.state.choice + "/" + r + "/imgur";
		
		fetch(query)
		.then(res => res.text())
		.then(data => {
			console.log("NAME FETCHED: " + data);
			that.setState({cur_img:data});
		})

		query = link + this.state.choice + "/" + r + "/name";
		fetch(query)
		.then(res => res.text())
		.then(data => {
			console.log("NAME FETCHED: " + data);
			that.setState({cur_name:data});
		})

		query = link + this.state.choice + "/" + r + "/fav";
		fetch(query)
		.then(res => res.text())
		.then(data => {
			console.log("NAME FETCHED: " + data);
			that.setState({cur_fav:data});
		})

		query = link + this.state.choice + "/" + r + "/quote";
		fetch(query)
		.then(res => res.text())
		.then(data => {
			console.log("NAME FETCHED: " + data);
			that.setState({cur_quote:data});
		})
	}
	disableModal(){
		console.log("MODAL TURNED OFF");
		this.setState({
			modal: false,
			cur_name:"",
			cur_quote:"",
			cur_fav:"",
			cur_img:""
		});
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
			<div id = "yearbook-parent">
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

				<Content 
				choice = {this.state.choice} 
				rolls = {this.state.rolls} 
				callModal = {this.callModal}
				setCurRoll = {this.setCurData}/>

				
			</div>
			<Modal 
			display = {this.state.modal} 
			roll = {this.state.cur_roll} 
			sec = {this.state.choice} 
			disableModal = {this.disableModal}
			name = {this.state.cur_name}
			fav = {this.state.cur_fav}
			quote = {this.state.cur_quote}
			imgur = {this.state.cur_img}
			/>
			</div>
			);
	}
}


class Content extends Component{
	render(){
		if(this.props.choice==="i")
			return <Info />
		else if(this.props.rolls==="")
			return <Loading />
		else
			return(
				<div>
				
				<Section 
				sec = {this.props.choice} 
				rolls = {this.props.rolls.split(" ")} 
				callModal = {this.props.callModal}
				setCurRoll = {this.props.setCurRoll}
				/>
				</div>
				)
	}
}

class Modal extends Component{
	render(){
		if(this.props.display){
			console.log("dark screen set")
			return(
				<div id = "dark-screen">
					<div id = "modal-screen">
						<div id = "exit-modal" onClick = {this.props.disableModal}>
							X
						</div>
						<div id = "modal-screen-content">
							<div id = "content-img">
								<img id = "student-img" src={this.props.imgur} alt = "profile"></img> 
							</div>
							
							<div id = "content-info">
								<div id = "content-info-name">
									{this.props.name}
								</div>
								<div id = "content-info-class">
									Class: 12{this.props.sec.toUpperCase()} 
								</div>
								<div id = "content-info-roll">
									Roll: {this.props.roll}
								</div>
								<div id = "quote-heading">
									QUOTE
								</div>
								<div id = "content-info-quote">
									"{this.props.quote}"
								</div>
								<div id = "content-info-fav">
									<b>Favourite Character:</b> {this.props.fav}
								</div>
							</div>
						</div>
					</div>
				</div>
				);
		}else{
			return(null);
		}
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
		this.state = {
			dots: ""
		};
		this.c = 0;
	}
	componentDidMount(){
		this.timerID = setInterval(
			() => {this.tick()}, 
			500);
	}

	componentWillUnmount(){
		clearInterval(this.timerID);
	}
	tick(){
		let ans = "";
		this.c = (this.c+1)%4;
		switch(this.c){
			case 0: ans = ""; break;
			case 1: ans = "."; break;
			case 2: ans = ".."; break;
			case 3: ans = "..."; break;
			default: ans = ""
		}
		this.setState({dots: ans})
	}
	render(){
		return(<div id = "loading"> LOADING CONTENT{this.state.dots}</div>)
	}
}



class Section extends Component{
	printCards(){
		console.log("PRINTCARDS CALLED");
		var toReturn = [];
		for(let i = 0; i <  this.props.rolls.length; i++){
			//console.log("ARRAY LENGTH: " + this.props.rolls.length);
			toReturn.push(
				<Card 
					key = {this.props.rolls[i]} 
					roll = {this.props.rolls[i]}
					sec = {this.props.sec}
					callModal = {this.props.callModal}
					setCurRoll = {this.props.setCurRoll}
					/>
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
		this.state  = {name: ""}
		;
		let link = "https://slsyearbook.herokuapp.com/";
		let query = link + this.props.sec + "/" + this.props.roll + "/name";
		let that = this;
		fetch(query)
		.then(res => res.text())
		.then(data => {
			console.log("NAME FETCHED: " + data);
			that.setState({name:data});
		})
	}
	
	
	render(){
		return(
			<div 
			className = "card" 
			onClick = {()=>{
				this.props.setCurRoll(this.props.roll);
				this.props.callModal();

			}}
			key = {this.props.name}>
				Name: {this.state.name}
				<br />
				Roll: {this.props.roll}
				<br />
				Class: 12 {this.props.sec.toUpperCase()}
			</div>
			);
	}
}

