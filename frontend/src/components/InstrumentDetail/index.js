import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneInstrument } from "../../store/instrument";

const InstrumentDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const instrumentId = params.id;
  const instrument = useSelector(state => state.instrument);

  useEffect(() => {
    dispatch(getOneInstrument(instrumentId));
  }, [])


  return (
    <div>
      <h2>Instrument Detail</h2>
    </div>
  )
}

export default InstrumentDetail;
