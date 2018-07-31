// import React from 'react';

import './Maps.css';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 49.11,
      lng: 6.18

    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAZ_41dMDcVPY3RTkpK6gZRWWMZ5mgjn4g' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Metz'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}


export default Maps;
