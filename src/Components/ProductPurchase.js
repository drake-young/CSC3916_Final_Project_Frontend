import React, { Component} from 'react';
import { connect } from 'react-redux';
import Purchase from './Purchase';
import { resetPurchase } from '../Actions/purchActions';
import { Button, Image, Col, Row } from 'react-bootstrap';
import MapContainer from './Map';
import gauntlet from '../infg.png';

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
				<Row>
					<Col sm={1} md={1}>
						&nbsp;
					</Col>
					<Col sm={11} md={11}>
						<h1 className="prod-header">Buy the Infinity Gauntlet!</h1>
					</Col>
				</Row>
				<Row>
					<Col sm={7} md={6} className="prod-img text-right">
						<Image width="288" height="450" className="image" src={gauntlet} alt="Infinity Gauntlet" />
					</Col>
					<Col xs={1} sm={0} md={0} lg={0} xl={0}>&nbsp;</Col>
					<Col xs={10} sm={3} md={3} lg={2} className="prod-info"><br/>
						<h4>Cost: Everything</h4><br/>
						<h4>Color: Gold</h4><br/>
						<h4>Product Description:</h4>
						<p>The Infinity Gauntlet was designed to hold six of the &quot;soul gems&quot;, better known as the Infinity Gems. When used in combination their already impressive powers amke the wearer able to do anything they want. It was gathered by the mad Titan Thanos as he took the gems from the Elders of the Universe that had originally carried them.</p>
						<h5>** Infinity Gems Not Included **</h5>
					</Col>
					<Col xs={1} sm={0} md={0} lg={0} xl={0}>&nbsp;</Col>
				</Row>
                <Purchase />
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