import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHover } from "../../store/instrument";

const InstrumentComponent = ({ instrument }) => {
  const { id, name, manufacturer, imgSrc, lat, lng } = instrument;
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push(`/instruments/${id}`)
  }

  const handleHover = () => {
    setSelected(instrument);
    dispatch(getHover(selected));
    if (hover) {
      setHover(false)
    }
    setHover(true);
  }

  return (
    <div
      className="instrument-component-container"
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      >
      <div className="instrument-image-div">
        <img src={imgSrc.imgSrc} />
      </div>
      <div className="instrument-title">
        <span>{`${manufacturer} ${name}`}</span>
      </div>
      <span></span>


    </div>
  )
}

export default InstrumentComponent;
