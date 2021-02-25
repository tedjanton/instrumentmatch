import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isWithinInterval } from "date-fns";
import { postRental } from "../../store/instrument";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import note from "../../images/music-note.png";
import "./InstrumentDetail.css";


const CalendarComponent = ({ instrument, currRating, ratings }) => {
  const [value, onChange] = useState("");
  const [showCal, setShowCal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const rentals = instrument?.Rentals;

  let disableRanges = rentals?.map(rental => (
    [new Date(rental.rentalStartDate),
      new Date(rental.rentalEndDate)]
  ));

  function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] })
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
  }

  const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const onClick = (e) => {
    e.preventDefault();

    const rental = {
      userId: sessionUser.id,
      instrumentId: instrument.id,
      rentalStartDate: value[0],
      rentalEndDate: addDays(value[1], 1)
    }
    if (sessionUser) {
      setShowCal(false);
      dispatch(postRental(rental));
    }
  }

  let calComponent;
  if (showCal) {
    calComponent = (
      <>
        <div id="confirm-cal">
          <button
            id="confirm-cal-button"
            value={value}
            onClick={onClick}>Confirm Rental</button>
        </div>
        <Calendar
          onChange={onChange}
          value={value}
          selectRange={true}
          // showDoubleView={true}
          tileDisabled={tileDisabled}
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
  }, [showCal])

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
            {`(${ratings?.length > 1 ? "reviews" : "review"})`}
          </p>
        </div>
      </div>
      <div id="cal">
        {calComponent}
      </div>
    </div>
  )
}

export default CalendarComponent;
