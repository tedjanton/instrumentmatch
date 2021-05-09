import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
require("dotenv").config();

const MapContainer = ({ locations }) => {
  const [selectedMarker, setSelectedMarker] = useState({});
  const hover = useSelector(state => state.instruments.selected)
  let markersArray = [];

  useEffect(() => {
    if (hover) {
      let hovering = markersArray.filter(mk => mk.id === hover.id);
      setSelectedMarker(hovering[0])
    }
  }, [hover]);

  locations.forEach(location => {
    let coord = { lat: location.lat, lng: location.lng }
    let marker = {
      id: location.id,
      name: location.name,
      imgSrc: location.imgSrc,
      coordinates: coord
    }
    markersArray.push(marker);
  });

  const onSelect = item => {
    setSelectedMarker(item);
  }

  const mapStyles = {
    height: "87.5vh",
    width: "45vw"
  };

  let mapCenter;
  if (selectedMarker) {
    mapCenter = {
      lat: selectedMarker.lat,
      lng: selectedMarker.lng
    }
    mapCenter = {
      lat: 41.8523,
      lng: -87.660
    }
  }

  return (
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_API_KEY_GOOGLE_MAPS}>
        <GoogleMap
          id="map"
          mapContainerStyle={mapStyles}
          zoom={11}
          center={mapCenter}
        >
          {markersArray.length && markersArray?.map(marker => (
            <Marker
              key={marker.id}
              position={marker.coordinates}
              onClick={() => onSelect(marker)} />
          ))}
          {selectedMarker?.coordinates && (
            <InfoWindow
              position={selectedMarker.coordinates}
              clickable={true}
              onCloseClick={() => setSelectedMarker({})}>
                <p>{selectedMarker.name}</p>
            </InfoWindow>
          )}

        </GoogleMap>

     </LoadScript>
  )
}

export default MapContainer;
