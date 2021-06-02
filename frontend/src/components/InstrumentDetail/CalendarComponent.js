import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { isWithinInterval } from "date-fns";
import Calendar from "react-calendar";
import { Modal } from '../../context/Modal';
import LoginForm from "../LoginFormModal/LoginForm";
import { postRental } from "../../store/instrument";
import { getRentalDate } from "../../utils";
import 'react-calendar/dist/Calendar.css';
import note from "../../images/music-note.svg";
import "./InstrumentDetail.css";


const CalendarComponent = ({ instrument, currRating, ratings }) => {
  const [value, onChange] = useState("");
  const [showCal, setShowCal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const rentals = instrument?.Rentals;

  let disableRanges = rentals?.map(rental => (
    [new Date(rental.rentalStartDate),
      new Date(rental.rentalEndDate)]
  ));

  function isWithinRange(date, range) {
    return isWithinInterval(date, {
      start: range[0],
      end: range[1],
      // end: new Date(range[1].valueOf() + range[1].getTimezoneOffset() * 60000)
    })
  }

  function isWithinRanges(date, ranges) {
    return ranges?.some(range => isWithinRange(date, range));
  }

  function tileDisabled({ date, view }) {
    if (view === "month") {
      return isWithinRanges(date, disableRanges);
    }
  }

  const openCal = () => {
    if (showCal) return;
    setShowCal(true);
  };

  const confirmRental = async () => {
    const rental = {
      userId: sessionUser.id,
      instrumentId: instrument.id,
      rentalStartDate: value[0],
      rentalEndDate: value[1]
    };

    setShowCal(false);
    await dispatch(postRental(rental));
    return history.push("/myrentals");
  }

  let rentalWarning;
  if (!sessionUser) {
    rentalWarning = (
      <>
        <LoginForm />
      </>
    )
  } else {
    rentalWarning = (
    <div className="rental-modal">
      {value[0] && value[1] && (
        <h2>{`Are you sure you would like to book this rental from ${
          // getRentalDate(value[0], new Date(value[1].valueOf() - value[1].getTimezoneOffset() * 60000))
          getRentalDate(value[0], value[1])
        }?`}
        </h2>
      )}
      <div className="rental-buttons">
        <button
          onClick={() => setShowModal(false)}
          className="rental-buttons-cancel">Cancel
        </button>
        <button
          onClick={confirmRental}
          className="rental-buttons-confirm">Confirm Rental
        </button>
      </div>
    </div>
    )
  }

  let calComponent;
  if (showCal) {
    calComponent = (
      <>
        <div id="confirm-cal">
          <button
            id="confirm-cal-button"
            value={value}
            onClick={() => setShowModal(true)}>Confirm Rental</button>
        </div>
        <Calendar
          onChange={onChange}
          value={value}
          selectRange={true}
          tileDisabled={tileDisabled}
          minDate={new Date()}
        />
        <div id="close-cal">
          <button>close</button>
        </div>
      </>
    )
  } else {
    calComponent = (
      <>
        <button id="open-cal" onClick={openCal}>Check Availability</button>
      </>
    )
  }

  useEffect(() => {
    if (!showCal) return;

    const closeCal = () => {
      setShowCal(false);
    }
    document.getElementById("close-cal")
    .addEventListener("click", () => {
      setShowCal(false);
    })
    return () => document.removeEventListener("click", closeCal)
  }, [showCal]);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="price">
          <p className="price-num">
            {`$${Math.trunc(instrument?.pricePerDay)}`}
          </p>
          <p className="price-text">/ day</p>
        </div>
        <div className="reviews">
          <img className="cal-note" src={note} />
          <p className="cal-rating">{currRating}</p>
          <p className="cal-num-reviews">
          {`(${ratings?.length} ${ratings?.length > 1 ? "reviews" : "review"})`}
          </p>
        </div>
      </div>
      <div id="cal">
        {calComponent}
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {rentalWarning}
        </Modal>
      )}
    </div>
  )
}

export default CalendarComponent;
