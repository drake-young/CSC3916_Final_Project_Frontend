import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';
import { connect } from 'react-redux';

const mapStyles = {
  width: '50%',
  height: '50%',
  margin: 0 auto;
};

export class MapContainer extends Component {
   state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {},         //Shows the infoWindow to the selected place upon a marker
	latitude: 0,
	longitude: 0
  };
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <div>
	  <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
		lat: this.props.latitude,
		lng: this.props.longitude
        }}
      >
	   <Marker
          onClick={this.onMarkerClick}
          name={'Your IP Location'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
		
		   <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
	  <script async defer src={"https://maps.googleapis.com/maps/api/js?key=AIzaSyDygGwTT_ShpZTg2mTWJ5EF2LBsK2B7AZA&callback=initMap"}
  type="text/javascript"></script></div>
    );
  }
}


const mapStateToProps = state => {
    return {
		latitude: state.purch.latitude,
		longitude: state.purch.longitude
    }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDygGwTT_ShpZTg2mTWJ5EF2LBsK2B7AZA'
})(connect(mapStateToProps)(MapContainer));
