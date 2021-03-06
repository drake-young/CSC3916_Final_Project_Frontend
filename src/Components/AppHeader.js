import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";

class AppHeader extends Component 
{
	render() 
	{
		return (
			<div>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							Buy Infinity Gauntlet
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<LinkContainer to="/purchase">
							<NavItem eventKey={1}>Purchase</NavItem>
						</LinkContainer>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

export default AppHeader;
