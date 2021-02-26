import MapContainer from "../MapContainer";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as instrumentActions from "../../store/instrument";
import InstrumentComponent from "./InstrumentComponent";
import calcRating from "../../utils";
import "./InstrumentBrowser.css";

const InstrumentBrowser = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const instruments = useSelector(state => state.instruments.instruments);
  let locations = [];

  instruments?.forEach(instrument => {
    const allRatings = instrument.Reviews.map(review => review.rating);
    const avgRating = calcRating(allRatings);

    let location = {
      id: instrument.id,
      name: instrument.name,
      ratings: avgRating,
      manufacturer: instrument.manufacturer,
      imgSrc: instrument.Images[0],
      lat: parseFloat(instrument.lat),
      lng: parseFloat(instrument.lng)
    }
    locations.push(location);
  });

  useEffect(() => {
    dispatch(instrumentActions.getInstruments());
  }, [])

  return (
    <div className="instrument-browser-container">
      <div className="instrument-grid-container">
        <div className="instrument-grid-title">
          <h3>Instruments to rent near you.</h3>
        </div>

        {locations.map(location => (
          <InstrumentComponent key={location.id} instrument={location} />
        ))}
      </div>
      <div className="instrument-map-container">
        <MapContainer locations={locations}/>
      </div>
    </div>
  )
}


export default InstrumentBrowser;
