import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useEffect, useState } from "react";
require("dotenv").config();

const MapContainer = ({ locations }) => {
  const map = document.getElementById("map");
  const [selected, setSelected] = useState({});
  let markers = [];

  locations.forEach(location => {
    let coord = { lat: location.lat, lng: location.lng }
    let marker = {
      id: location.id,
      name: location.name,
      imgSrc: location.imgSrc,
      coordinates: coord
    }
    markers.push(marker);
  });

  const onSelect = item => {
    setSelected(item);
  }

  const mapStyles = {
    height: "500px",
    width: "450px"};

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
            <Marker
              key={marker.id}
              position={marker.coordinates}
              onClick={() => onSelect(marker)} />
          ))}
          {selected.coordinates && (
            <InfoWindow
              position={selected.coordinates}
              clickable={true}
              onCloseClick={() => setSelected({})}>
                <p>{selected.name}</p>
            </InfoWindow>
          )}

        </GoogleMap>

     </LoadScript>
  )
}

export default MapContainer;
