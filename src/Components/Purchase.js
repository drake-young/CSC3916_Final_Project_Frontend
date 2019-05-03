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
				expirationDate:''
			}
		};
	}
	
	updateDetails(event)
	{
		let updateDetails = Object.assign({}, this.state.details);
		updateDetails[event.target.id] = event.target.value;
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
				<FormGroup controlId="nameOnCard">
					<Col componentClass={ControlLabel} sm={3}>
						Name on Card
					</Col>
					<Col sm={9}>
						<FormControl onChange={this.updateDetails} value={this.state.details.nameOnCard} type="text" placeholder="Your Name..." />
					</Col>
				</FormGroup>
				<FormGroup controlId="cardNumber">
					<Col componentClass={ControlLabel} sm={3}>
						Card Number
					</Col>
					<Col sm={9}>
						<FormControl onChange={this.updateDetails} value={this.state.details.cardNumber} type="text" placeholder="e.g. 1234567890" />
					</Col>
				</FormGroup>
				<FormGroup controlId="cvv">
					<Col componentClass={ControlLabel} sm={3}>
						CCV
					</Col>
					<Col sm={9}>
						<FormControl onChange={this.updateDetails} value={this.state.details.cvv} type="text" placeholder="CVV Number" />
					</Col>
				</FormGroup>
				<FormGroup controlId="expirationDate">
					<Col componentClass={ControlLabel} sm={3}>
						Expiration Date
					</Col>
					<Col sm={9}>
						<FormControl onChange={this.updateDetails} value={this.state.details.expirationDate} type="text" placeholder="e.g. 05/19" />
					</Col>
				</FormGroup>
				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button onClick={this.purchase}>Purchase!</Button>
					</Col>
				</FormGroup>
			</Form>
		);
	}
}

const mapStateToProps = state => { return { } }

export default connect(mapStateToProps)(Purchase);
