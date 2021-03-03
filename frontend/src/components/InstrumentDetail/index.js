import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneInstrument } from "../../store/instrument";
import CalendarComponent from "./CalendarComponent";
import Reviews from "./Reviews";
import note from "../../images/music-note.svg";
import calcRating, { getIcon } from "../../utils";
import "./InstrumentDetail.css";
import { Modal } from "../../context/Modal";
import PictureModal from "./PictureModal";

const InstrumentDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const instrumentId = params.id;
  const [showModal, setShowModal] = useState(false);
  const [clickedImg, setClickedImg] = useState(null)
  const instrument = useSelector(state => state.instruments.selected?.instrument);

  let ratings = instrument?.Reviews?.map(review => review.rating);

  let currRating;
  if (ratings) currRating = calcRating(ratings);

  let icon;
  if (instrument) icon = getIcon(instrument);

  useEffect(() => {
    dispatch(getOneInstrument(instrumentId));
  }, [])

  let imgModal;
  if (clickedImg) {
    imgModal = (
      <>
        <Modal onClose={() => {
          setShowModal(false)
          setClickedImg(null)
        }}>
          <PictureModal image={clickedImg} />
        </Modal>
      </>
    )
  } else {
    imgModal = (
      <>
      </>
    )
  }

  return (
    <div className="idp-container">
      <div className="idp-header">
        <div className="idp-title">
          <h2>{`${instrument?.manufacturer} ${instrument?.name}`}</h2>
        </div>
        <div className="idp-subtitle">
          <img className="idp-note" src={note} />
          <p className="idp-rating">{currRating?.toString()}</p>
          <p className="idp-num-reviews">
            {`(${ratings?.length} ${ratings?.length > 1 ? "reviews" : "review"})`}
          </p>
          <p>{`•`}</p>
          <Link
            to="/instruments"
            className="idp-city-state">
              {`${instrument?.city}, ${instrument?.state}`}
          </Link>
        </div>
      </div>
      <div className="idp-images-container">
        {instrument?.Images?.map((image, i) => (
          <div
            key={image.id}
            className={`idp-image-div image-${i}`}
            onClick={() => {
              setClickedImg(image)
              setShowModal(true)}}>
            <img className="overlay" src={image.imgSrc} />
          </div>
        ))}
      {imgModal}
      </div>
      <div className="idp-lower-grid">
        <div className="idp-host-details">
          <div className="idp-host-title">
            <h3>{`This instrument is owned by ${instrument?.User?.firstName}`}</h3>
          </div>
          <div className="idp-host-subtitle">
            <p>{`Give it a whirl!`}</p>
          </div>
          <div className="idp-instrument-details">
              <div className="idp-details-family">
                <img className="instrument-icon" src={icon} />
                <p>{`This is a ${instrument?.Family?.family} instrument.`}</p>
              </div>
              <div className="idp-serviced">
                <i className="fas fa-tools"></i>
                <p>{`Last serviced ${instrument?.lastServiced} ago.`}</p>
              </div>
            <div className="idp-description">
              <p>{`${instrument?.description}`}</p>
            </div>
          </div>
        </div>
        <div className="idp-date-picker">
          <CalendarComponent
            instrument={instrument}
            currRating={currRating?.toString()}
            ratings={ratings} />
        </div>
      </div>
      <div className="idp-reviews-containter">
      <Reviews
            instrument={instrument}
            currRating={currRating?.toString()}
            ratings={ratings} />
      </div>
    </div>
  )
}

export default InstrumentDetail;
