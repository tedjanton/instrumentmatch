import { useState, useEffect } from "react";
import { isWithinInterval } from "date-fns";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./InstrumentDetail.css";


const CalendarComponent = ({ instrument }) => {
  const [date, onChange] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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

  const [showCal, setShowCal] = useState(false);

  const openCal = () => {
    if (showCal) return;
    setShowCal(true);
  }

  let calComponent;
  if (showCal) {
    calComponent = (
      <>
        <Calendar
          onChange={onChange}
          value={date}
          selectRange={true}
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

  console.log(showCal);

  return (
    <div className="calendar-container">
      <div id="cal">
        <button id="open-cal" onClick={openCal}>Check Availability</button>
        {calComponent}

      </div>
    </div>
  )
}

export default CalendarComponent;
