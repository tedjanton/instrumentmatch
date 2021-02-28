import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { deleteItem, getInstruments, getOneInstrument } from "../../store/instrument";
import { findMyRentals } from "../../store/rentals";
import "./MyRentals.css";

const MyRentals = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const instruments = useSelector(state => state.instruments.instruments);
  const myRentals = useSelector(state => state.rentals.myRentals);
  const [selectedRental, setSelectedRental] = useState(null);

  let rentalDetails = [];
  myRentals?.forEach(rental => {
    instruments?.forEach(instr => {
      if (rental.instrumentId === instr.id) {
        let ren = {...rental}
        rentalDetails.push(ren);
      }
    })
  });



  useEffect(() => {
    if (selectedRental) {
      dispatch(deleteItem(selectedRental));
      // history.push("/instruments");
      window.location.reload(true);
    }
  }, [selectedRental])


  useEffect(() => {
    dispatch(findMyRentals(sessionUser.id));
    dispatch(getInstruments());
  }, [dispatch]);

  const getRentalDate = (startStr, endStr) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let startDate = new Date(startStr);
    let startDay = startDate.getDate();
    let startMonth = monthNames[startDate.getMonth()]
    let startYear = startDate.getFullYear();

    let endDate = new Date(endStr);
    let endDay = endDate.getDate();
    let endMonth = monthNames[endDate.getMonth()];
    let endYear = startDate.getFullYear();

    if (endYear === startYear) {
      return `${startMonth} ${startDay} to ${endMonth} ${endDay}, ${endYear}`;
    } else {
      return `${startMonth} ${startDay}, ${startYear} to ${endMonth} ${endDay}, ${endYear}`;
    }
  }

  const currDate = new Date().toJSON().slice(0, 10);

  const reviewBtn = (rental, endDate) => {
    if (currDate > endDate) {
      return (
        <button className="rental-add-review-button">
          <Link to={`/addreview/${rental.Instrument.id}`}>Add Review</Link>
        </button>
      )
    } else {
      return (
        <button disabled="true" className="rental-button-disabled">Rental Not Completed</button>
      )
    }
  }

  const cancelBtn = (rental, endDate) => {
    if (currDate < endDate) {
      return (
        <button
          className="rental-cancel-button"
          onClick={(e) => {
            window.confirm("Are you sure you want to cancel?")
            setSelectedRental(rental.id)}}
          >Cancel Rental
        </button>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }

  return (
    <div>
      <div className="rentals-title">
        <h2>My Rentals</h2>
      </div>
      <div className="rentals-container">
      {rentalDetails?.map(rental => (
        <div key={rental.id} id={rental.id} className="rental-container">
          <div className="rental-img-container">
            <img src={rental.Instrument.Images[0].imgSrc} />
          </div>
          <div className="rental-name-container">
            <p>{`${rental.Instrument.manufacturer} ${rental.Instrument.name}`}</p>
          </div>
          <div className="rental-dates">
            <p className="rental-dates-header">Rental Dates:</p>
            <p className="rental-dates-text">
              {getRentalDate(rental.rentalStartDate, rental.rentalEndDate)}
            </p>
          </div>
          <div className="rental-cancel-container">
            {cancelBtn(rental, rental.rentalEndDate)}
          </div>
          <div className="rental-add-review-container">
            {reviewBtn(rental, rental.rentalEndDate)}
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}


export default MyRentals;
