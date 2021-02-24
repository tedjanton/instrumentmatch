import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
require("dotenv").config();

const MapContainer = ({ markers }) => {

  const mapStyles = {
    height: "500px",
    width: "500px"};

  const defaultCenter = {
    lat: 41.8818, lng: -87.6231
  }

  return (
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_API_KEY_GOOGLE_MAPS}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;
