import MapContainer from "../MapContainer";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as instrumentActions from "../../store/instrument";
import InstrumentComponent from "./InstrumentComponent";
import "./InstrumentBrowser.css";

const InstrumentBrowser = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const instruments = useSelector(state => state.instruments.instruments);
  let locations = [];

  instruments?.forEach(instrument => {
    let location = {
      id: instrument.id,
      name: instrument.name,
      imgSrc: instrument.Images[0],
      lat: parseFloat(instrument.lat),
      lng: parseFloat(instrument.lng)
    }
    locations.push(location);
  })

  console.log(locations);

  const markers = instruments?.map(i => `${i.address_1} ${i.city} ${i.state} ${i.zip}`);

  useEffect(() => {
    dispatch(instrumentActions.getInstruments());
  }, [])

  return (
    <div className="instrument-browser-container">
      <div className="instrument-grid-container">
        {locations.map(location => (
          <InstrumentComponent key={location.id} location={location} />
        ))}
      </div>
      <div className="instrument-map-container">
        <MapContainer locations={locations}/>
      </div>
    </div>
  )
}


export default InstrumentBrowser;
