import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const MapContainer = ({ markers }) => {

  // const geocoder = new google.maps.Geocoder();


  const mapStyles = {
    height: "500px",
    width: "500px"};

  const defaultCenter = {
    lat: 41.8818, lng: -87.6231
  }

  return (
     <LoadScript
       googleMapsApiKey=''>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;
