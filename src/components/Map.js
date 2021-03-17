import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    const style = {
      width: 350,
      height: 350,
      margin: "dense",
    };
    return (
      <Map
        item
        xs={6}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={30}
        initialCenter={{ lat: -0.210311, lng: -78.488545 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={"Changing Colors Garage"}
          position={{ lat: -0.210311, lng: -78.488545 }}
          name={"Changing Colors Garage"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <Paper>
            <Typography variant="headline" component="h4">
              Changing Colors Garage
            </Typography>
            <Typography component="p" variant="h2">
              Escuela Politécnica Nacional <br />
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  api: process.env.GOOGLE_API_KEY_GOES_HERE,
})(GoogleMapsContainer);
