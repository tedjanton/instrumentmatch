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

  console.log(rentalDetails);

  useEffect(() => {
    if (selectedRental) {
      dispatch(deleteItem(selectedRental));
      history.push("/instruments");
    }
  }, [selectedRental])


  useEffect(() => {
    dispatch(findMyRentals(sessionUser.id));
    dispatch(getInstruments());
  }, [dispatch]);

  return (
    <div>
      <h2>My Rentals</h2>
      <div className="rentals-container">
      {rentalDetails?.map(rental => (
        <div key={rental.id} id={rental.id} className="rental-container">
          <div className="rental-name-container">
            <p>{`${rental.Instrument.manufacturer} ${rental.Instrument.name}`}</p>
          </div>
          <div className="rental-dates">
            <p>{`Rented ${rental.rentalStartDate} to ${rental.rentalEndDate}`}</p>
          </div>
          <div className="rental-add-review-container">
            <Link to={`/addreview/${rental.Instrument.id}`}>Add Review</Link>
          </div>
          <div className="rental-cancel-container">
            <button
            onClick={(e) => setSelectedRental(rental.id)}
            >Cancel Rental
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}


export default MyRentals;
