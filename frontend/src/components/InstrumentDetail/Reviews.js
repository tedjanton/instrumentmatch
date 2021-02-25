import note from "../../images/music-note.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getReviews } from "../../store/instrument";

const Reviews = ({ instrument, currRating, ratings }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.instruments.reviews);

  useEffect(() => {
    if (instrument) {
      dispatch(getReviews(instrument.id))
    }
  }, [dispatch, instrument])

  return (
    <div className="reviews-container">
      <div className="reviews-header-container idp-subtitle">
        <img className="idp-note" src={note} />
        <p className="idp-rating">{currRating}</p>
        <p className="idp-num-reviews">{`(${ratings?.length > 1 ? "reviews" : "review"})`}</p>
      </div>
      {reviews?.map(review => (
        <div key={review.id} className="review-container">
          <div className="review-container-header">
            <div className="review-container-icon">
              <i className="far fa-user-circle" />
            </div>
            <p className="review-name">{review.User.firstName}</p>
          </div>
          <div className="review-container-description">
            <p>{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Reviews;
