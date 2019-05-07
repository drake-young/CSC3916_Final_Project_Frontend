import React, { Component} from 'react';
import { connect } from 'react-redux';
import Purchase from './Purchase';
import { resetPurchase } from '../Actions/purchActions';
import { Button } from 'react-bootstrap';
import MapContainer from './Map';

class ProductPurchase extends Component {

    constructor(){
        super();

        this.state = {
            toggleReceipt: false
        };
    }

    componentDidMount(){

    }

    showForm(){
        this.setState({
            toggleReceipt: false
        });
    }

    showReceipt(){
        this.setState({
            toggleReceipt: true
        });
    }
	
	anotherPurchase(){
		this.props.dispatch(resetPurchase());
	}

    render(){

        const formNotSubmitted = (
            <div>
                { this.state.toggleReceipt ? <div></div> : <Purchase />}
            </div>
        );
        const formSubmitted = (
			<div>
                <br/>
                <h1>{this.props.message}</h1><br/>
				<Button className = {"btn-success"} onClick={this.anotherPurchase.bind(this)}>Purchase Another</Button>
                <br/><br/><br/>
				<MapContainer />
			</div>
		);

        return (
            <div>
                {this.props.purchasePosted ? formSubmitted : formNotSubmitted}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        purchasePosted: state.purch.purchasePosted,
		success: state.purch.success,
		message: state.purch.message,
		latitude: state.purch.latitude,
		longitude: state.purch.longitude
    }
}

export default connect(mapStateToProps)(ProductPurchase)