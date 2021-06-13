import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteItem, getInstruments } from "../../store/instrument";
import { Modal } from '../../context/Modal';
import { findMyRentals } from "../../store/rentals";
import { getRentalDate } from "../../utils";
import "./MyRentals.css";

const MyRentals = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const instruments = useSelector(state => state.instruments.instruments);
  const myRentals = useSelector(state => state.rentals.myRentals);
  const [selectedRental, setSelectedRental] = useState(null);
  const [toDelete, setToDelete] = useState();
  const [showModal, setShowModal] = useState(false);

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
      window.location.reload();
    }
  }, [selectedRental])

  useEffect(() => {
    dispatch(findMyRentals(sessionUser.id));
    dispatch(getInstruments());
  }, [dispatch]);

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
        <button disabled={true} className="rental-button-disabled">Rental Not Completed</button>
      )
    }
  }

  const cancelBtn = (rental, endDate) => {
    if (currDate < endDate) {
      return (
        <button
          className="rental-cancel-button"
          onClick={() => {
            setShowModal(true)
            setToDelete(rental.id)}}>Cancel Rental
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
          <div
            className="rental-img-container"
            onClick={() => history.push(`/instruments/${rental.Instrument.id}`)}
          >
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
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="rental-modal">
            <h2>Are you sure you would like to cancel this rental?</h2>
            <div className="rental-buttons">
              <button
                onClick={() => setShowModal(false)}
                className="rental-buttons-cancel">No
              </button>
              <button
                onClick={() => setSelectedRental(toDelete)}
                className="rental-buttons-confirm">Yes</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}


export default MyRentals;
