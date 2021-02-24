import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneInstrument } from "../../store/instrument";
import note from "../../images/music-note.png";
import calcRating from "../../utils";
import "./InstrumentDetail.css";

const InstrumentDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const instrumentId = params.id;
  const instrument = useSelector(state => state.instruments.selected);

  let ratings = instrument?.Reviews?.map(review => review.rating);

  let currRating;
  if (ratings) currRating = calcRating(ratings);

  console.log(currRating);

  useEffect(() => {
    dispatch(getOneInstrument(instrumentId));
  }, [])

  return (
    <div className="idp-container">
      <div className="idp-header">
        <div className="idp-title">
          <h2>{`${instrument?.manufacturer} ${instrument?.name}`}</h2>
        </div>
        <div className="idp-subtitle">
          <img className="idp-note" src={note} />
          <p className="idp-rating">{currRating}</p>
          <p className="idp-num-reviews">{`(${ratings?.length > 1 ? "reviews" : "review"})`}</p>
          <p>{`•`}</p>
          <Link to="/instruments" className="idp-city-state">{`${instrument?.city}, ${instrument?.state}`}</Link>
        </div>
      </div>
      <div className="idp-images-container">
        {instrument?.Images?.map(image => (
          <div key={image.id} className="idp-image-div">
            <img src={image.imgSrc} />
          </div>
        ))}
      </div>
      <div className="idp-host-details">
        <div className="idp-host-title">
          <h3>{`This instruments owned by ${instrument?.User?.firstName}`}</h3>
        </div>
        <div className="idp-host-subtitle">
          <p>Last serviced less than 6 months ago</p>
        </div>
      </div>
    </div>
  )
}

export default InstrumentDetail;
