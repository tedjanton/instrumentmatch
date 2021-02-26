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

  console.log(selected);

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
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}>
      <div className="instrument-header">
        <div className="instrument-image-container">
          <div className="instrument-image-div">
            <img src={imgSrc.imgSrc} />
          </div>
        </div>
        <span>{`${manufacturer} ${name}`}</span>
        <span></span>
      </div>

    </div>
  )
}

export default InstrumentComponent;
