import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getOneInstrument, postReview } from "../../store/instrument";
import Ratings from "react-ratings-declarative";
import InstrumentComponent from "../InstrumentBrowser/InstrumentComponent";

const ReviewForm = () => {
  const user = useSelector(state => state.session.user);
  const instrument = useSelector(state => state.instruments.selected?.instrument)
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const params = useParams();
  const instrumentId = params.id;
  const userId = user.id;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getOneInstrument(instrumentId));
  }, [dispatch])

  const onSubmit = async (e) => {
    e.preventDefault();
    const submission = {
      userId,
      instrumentId,
      review: comment,
      rating: parseInt(rating, 10)
    }
    await dispatch(postReview(submission));
    return history.push(`/instruments/${instrumentId}`);
  }

  return (
    <div className="page-container">
      <div className="page-title">
        <h2>Loved it? Didn't love it? Let us know...</h2>
      </div>
      <div className="review-form-container">
        <div className="review-instrument-details-container">
          <div className="review-instrument-title">
            <h2>{`${instrument?.manufacturer} ${instrument?.name}`}</h2>
          </div>
          <div className="review-instrument-img">
            <img src={instrument?.Images[0].imgSrc} />
          </div>
        </div>
        <div className="review-form">
          <form onSubmit={onSubmit}>
            <div className="review-title">
              <h2>Rate 1-5 Music Notes</h2>
            </div>
            <div className="ratings-widget">
              <Ratings
                rating={rating}
                wigetRatedColor="yellow"
                changeRating={setRating}
                svgIconPaths="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
                widgetRatedColors="#bd921d"
                widgetEmptyColors="grey"
                widgetHoverColors="#bd921d"
                widgetDimensions="80px"
                widgetSpacings="0"
              >
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
              </Ratings>
            </div>
            <div className="review-comment-div">
              <textarea
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Enter your review"
                className="review-comment-input"
              />
            </div>
            <div className="review-submit-button-div">
              <button
                className="review-submit-button"
                type="submit">Add Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReviewForm;
