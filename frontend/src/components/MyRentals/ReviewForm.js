import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { postReview } from "../../store/instrument";

const ReviewForm = () => {
  const user = useSelector(state => state.session.user);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const params = useParams();
  const instrumentId = params.id;
  const userId = user.id;
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(user);

  const onSubmit = (e) => {
    e.preventDefault();
    const submission = {
      userId,
      instrumentId,
      review: comment,
      rating: parseInt(rating, 10)
    }
    dispatch(postReview(submission))
    history.push(`/instruments/${instrumentId}`)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <p>Rate 1-5 Music Notes</p>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="rating"
          />
        </div>
        <textarea
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your review"
          />
        <button type="submit">Add Review</button>
      </form>
    </div>
  )
}

export default ReviewForm;
