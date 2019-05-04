import React, { Component} from 'react';
import { connect } from 'react-redux';
import Purchase from './Purchase';
import { resetPurchase } from '../Actions/purchActions';
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
				Posted: {this.props.purchasePosted ? "True" : "False"}<br/>
				Success: {this.props.success ? "True" : "False"}<br/>
				Message: {this.props.message}<br/>
				Latitude: {this.props.latitude}<br/>
				Longitude: {this.props.longitude}<br/>
				<button onClick={this.anotherPurchase.bind(this)}>Buy Another!</button>
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