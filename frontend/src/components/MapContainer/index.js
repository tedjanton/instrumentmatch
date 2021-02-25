import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect } from "react";
import Markers from "./Markers";
require("dotenv").config();

const MapContainer = ({ locations }) => {
  let map = document.getElementById("map");
  let markers = []

  locations.forEach(location => {
    let coord = { lat: location.lat, lng: location.lng }
    let marker = {
      id: location.id,
      name: location.name,
      coordinates: coord
    }
    markers.push(marker);
  })

  console.log(markers);

  // const getMarker = (marker) => {
  //   new window.google.maps.Marker({
  //     position: marker,
  //     map,
  //     title: "InstrumentMatch"
  //   })
  // }

  // useEffect(() => {
  //   if (markersLatLng[0]) getMarker(markersLatLng[0]);
  // })

  const mapStyles = {
    height: "500px",
    width: "500px"};

  const defaultCenter = {
    lat: 41.8523, lng: -87.6660
  }

  return (
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_API_KEY_GOOGLE_MAPS}>
        <GoogleMap
          id="map"
          mapContainerStyle={mapStyles}
          zoom={11}
          center={defaultCenter}
        >
          {markers?.map(marker => (
            <Marker key={marker.id} position={marker.coordinates} />
          ))}

        </GoogleMap>

     </LoadScript>
  )
}

export default MapContainer;
