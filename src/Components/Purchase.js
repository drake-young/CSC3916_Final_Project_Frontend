import React, { Component } from 'react';
import { submitPurchase } from '../Actions/purchActions';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import { Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Purchase extends Component 
{
	constructor()
	{
		super();
		
		this.updateDetails = this.updateDetails.bind(this);
		this.purchase = this.purchase.bind(this);
		this.state = {
			details:{
				nameOnCard:'',
				cardNumber:'',
				cvv:'',
				expirationDate:'',
				formValidation:false
			}
		};
	}
	
	updateDetails(event)
	{
		let reNameOnCard = /(\w.+\s).+/i;
		let reCardNumber = /^\d{16}$/;
		let reCvv = /^\d{3}$/;
		let reExpirationDate = /^(0[1-9]|10|11|12)\/[0-9]{2}$/;
		let updateDetails = Object.assign({}, this.state.details);
		updateDetails[event.target.id] = event.target.value;

		let invalid = true;
		invalid = invalid && reNameOnCard.test(updateDetails["nameOnCard"]);
		invalid = invalid && reCardNumber.test(updateDetails["cardNumber"]);
		invalid = invalid && reCvv.test(updateDetails["cvv"]);
		invalid = invalid && reExpirationDate.test(updateDetails["expirationDate"]);
		updateDetails["formValidation"] = invalid;

		this.setState({
			details:updateDetails
		});
	}
	
	purchase()
	{
		const {dispatch} = this.props;
		dispatch(submitPurchase(this.state.details));
	}
	
	render() 
	{
		return (
			<Form horizontal>
				<br/>
				<FormGroup controlId="nameOnCard">
					<Col componentClass={ControlLabel} sm={3}>
						Card Holder
					</Col>
					<Col sm={9}>
						<FormControl className = {this.state.details.nameOnCard === '' ? "input-err" : ""} onChange={this.updateDetails} value={this.state.details.nameOnCard} type="text" placeholder="Your Name..." />
					</Col>
				</FormGroup>
				<FormGroup controlId="cardNumber">
					<Col componentClass={ControlLabel} sm={3}>
						Card Number
					</Col>
					<Col sm={9}>
						<FormControl className = {this.state.details.cardNumber === '' ? "input-err" : ""} onChange={this.updateDetails} value={this.state.details.cardNumber} type="text" placeholder="e.g. 1234123412341234" />
					</Col>
				</FormGroup>
				<FormGroup controlId="cvv">
					<Col componentClass={ControlLabel} sm={3}>
						CCV
					</Col>
					<Col sm={9}>
						<FormControl className = {this.state.details.cvv === '' ? "input-err" : ""} onChange={this.updateDetails} value={this.state.details.cvv} type="text" placeholder="CVV Number" />
					</Col>
				</FormGroup>
				<FormGroup controlId="expirationDate">
					<Col componentClass={ControlLabel} sm={3}>
						Expiration Date
					</Col>
					<Col sm={9}>
						<FormControl className = {this.state.details.expirationDate === '' ? "input-err" : ""} onChange={this.updateDetails} value={this.state.details.expirationDate} type="text" placeholder="e.g. 05/19" />
					</Col>
				</FormGroup>
				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button className = {this.state.details.formValidation ? "btn-success" : "btn-danger"} onClick={this.purchase} disabled = {!this.state.details.formValidation}>Purchase</Button>
					</Col>
				</FormGroup>
				<br/>
			</Form>
		);
	}
}

const mapStateToProps = state => { return { } }

export default connect(mapStateToProps)(Purchase);
