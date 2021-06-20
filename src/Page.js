import {Component} from 'react';
import School from './School';
import Yearbook from './Yearbook';
export default class Page extends Component{
	constructor(props){
		super(props);
		this.state = {
			showYearbook: false
		}
		this.onClickEnter = this.onClickEnter.bind(this);
		this.onClickBack = this.onClickBack.bind(this);
	}

	onClickEnter(){
		this.setState({
			showYearbook: true
		})
	}

	onClickBack(){
		console.log("clicked");
		this.setState({
			showYearbook: false
		})
	}


	render(){
		if(!this.state.showYearbook)
			return <School onClickEnter = {this.onClickEnter}/>
		else
			return <Yearbook onClickBack = {this.onClickBack}/>
	}

}

