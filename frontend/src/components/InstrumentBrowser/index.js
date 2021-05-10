import MapContainer from "../MapContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as instrumentActions from "../../store/instrument";
import InstrumentComponent from "./InstrumentComponent";
import "./InstrumentBrowser.css";

const InstrumentBrowser = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.search.search)
  let locations = [];

  useEffect(() => {
    dispatch(instrumentActions.getInstruments());
  }, [])

  let instruments = searchQuery?.map(query => query.instrument)

  instruments?.forEach(instrument => {
    let location = {
      id: instrument.id,
      name: instrument.name,
      Reviews: instrument.Reviews,
      Family: instrument.Family,
      manufacturer: instrument.manufacturer,
      pricePerDay: instrument.pricePerDay,
      imgSrc: instrument.Images[0],
      lat: parseFloat(instrument.lat),
      lng: parseFloat(instrument.lng)
    }
    locations.push(location);
  });

  return (
    <div className="instrument-browser-container">
      <div className="instrument-grid-container">
        <div className="instrument-grid-title">
          <h3>Instruments to rent near you.</h3>
        </div>
        {instruments?.length ? (
          <>
            {locations.map(location => (
              <InstrumentComponent key={location.id} instrument={location} />
            ))}
          </>
        ) : (
          <div className="instrument-grid-none-found">
            <h2>No instruments found. Please try again!</h2>
          </div>
        )}
      </div>
      <div className="instrument-map-container">
        <MapContainer locations={locations}/>
      </div>
    </div>
  )
}


export default InstrumentBrowser;
