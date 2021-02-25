import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const InstrumentComponent = ({ location }) => {
  const { id, name, imgSrc, lat, lng } = location;
  const [selection, setSelection] = useState(null);
  const history = useHistory();

  const handleClick = () => {
    history.push(`/instruments/${id}`)
  }

  return (
    <div onClick={handleClick}>
      <div>
        <span>{name}</span>
        <span></span>
      </div>

    </div>
  )
}

export default InstrumentComponent;
