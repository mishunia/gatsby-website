import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { MapContainerStyled } from './styles'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class Gmap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }

  render() {
    return (
      <MapContainerStyled>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="Marker is here"
          />
        </GoogleMapReact>
      </MapContainerStyled>
    )
  }
}

export default Gmap
