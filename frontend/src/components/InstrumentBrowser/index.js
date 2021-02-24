import MapContainer from "../MapContainer";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as instrumentActions from "../../store/instrument";
import InstrumentGrid from "./InstrumentGrid";

const InstrumentBrowser = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const instruments = useSelector(state => state.instrument.instruments);

  const markers = instruments?.map(i => `${i.address_1} ${i.city} ${i.state} ${i.zip}`);

  useEffect(() => {
    if (instruments) return;
    dispatch(instrumentActions.getInstruments());
  }, [])

  return (
    <div className="instrument-browser-container">
      <div className="instrument-grid-container">
        <InstrumentGrid instruments={instruments} />
      </div>
      <div className="instrument-map-container">
        <MapContainer markers={markers}/>
      </div>
    </div>
  )
}


export default InstrumentBrowser;
