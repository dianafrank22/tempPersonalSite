import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';


export default class Contact extends React.Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
			<div className='contact'>
			<h3> Contact </h3>
			<h4><i>Email:</i> diana.frank22@gmail.com</h4>
			<h4><i>linkedin</i></h4>
			<h4><i>Twitter</i></h4>
			<h4><i>Github</i></h4>
			<h4><i>bitbucket</i></h4>
			</div>
		)
	}

}