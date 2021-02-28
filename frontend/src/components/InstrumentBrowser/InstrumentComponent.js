import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHover } from "../../store/instrument";
import calcRating, { getIcon } from "../../utils";
import note from "../../images/music-note.svg";

const InstrumentComponent = ({ instrument }) => {
  const { id, name, manufacturer, imgSrc, Reviews, Family, pricePerDay, lat, lng } = instrument;
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  let ratings = Reviews?.map(review => review.rating);

  let currRating;
  if (ratings) currRating = calcRating(ratings);

  let icon;
  if (instrument) icon = getIcon(instrument);

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
      <div className="instrument-details-family">
        <img className="instrument-icon" src={icon} />
        <p>{`${instrument?.Family?.family}`}</p>
      </div>
      <div className="instrument-ratings-reviews">
        <img className="idp-note" src={note} />
          <p className="idp-rating">{currRating?.toString()}</p>
          <p className="idp-num-reviews">
            {`(${ratings?.length} ${ratings?.length > 1 ? "reviews" : "review"})`}
          </p>
      </div>
      <div className="instrument-price">
        <p className="instrument-price-num">
            {`$${Math.trunc(instrument?.pricePerDay)}`}
        </p>
        <p className="instrument-price-text">/ day</p>
      </div>


    </div>
  )
}

export default InstrumentComponent;
