import { csrfFetch } from "./csrf";

const LOAD = "instrument/LOAD";
const LOAD_ONE = "instrument/LOAD_ONE";
const ADD_RENTAL = "instrument/ADD_RENTAL";
const HOVER = "instrument/HOVER";
const ADD_REVIEW = "instrument/ADD_REVIEW";
const REMOVE = "item/REMOVE";

const load = instruments => ({
  type: LOAD,
  instruments
})

const loadOne = selected => ({
  type: LOAD_ONE,
  selected
})

const addRental = rental => ({
  type: ADD_RENTAL,
  rental
})

const addReview = review => ({
  type: ADD_REVIEW,
  review
})

const remove = item => ({
  type: REMOVE,
  item
})


export const getHover = (selected) => async dispatch => {
  dispatch(loadOne(selected));
}

export const getInstruments = () => async dispatch => {
  const res = await csrfFetch("/api");
  const instruments = await res.json();
  dispatch(load(instruments));
};

export const getOneInstrument = (id) => async dispatch => {
  const res = await csrfFetch(`/api/instruments/${id}`);
  const selected = await res.json();

  if (res.ok) {
    dispatch(loadOne(selected));
  }
}

export const getReviews = (id) => async dispatch => {
  const res = await csrfFetch(`/api/instruments/${id}/reviews`);
  const reviews = await res.json();

  if (res.ok) {
    dispatch(load(reviews));
  }
};

export const postRental = (rental) => async dispatch => {
  const { userId, instrumentId, rentalStartDate, rentalEndDate } = rental;
  const res = await csrfFetch(`/api/instruments/${userId}/rental`, {
    method: "POST",
    body: JSON.stringify({
      userId,
      instrumentId,
      rentalStartDate,
      rentalEndDate
    })
  });

  const data = await res.json();
  dispatch(addRental(data))
}

export const deleteItem = id => async dispatch => {
  const res = await csrfFetch(`/api/rental/${id}`, {
    method: "POST",
    body: JSON.stringify({ id })
  });
  const data = await res.json();

  dispatch(remove(data));
}

export const postReview = (submission) => async dispatch => {
  const { userId, instrumentId, rating, review } = submission;
  const res = await csrfFetch(`/api/addreview`, {
    method: "POST",
    body: JSON.stringify({
      userId,
      instrumentId,
      review,
      rating
    })
  })

  const data = await res.json();
  dispatch(addReview(data));
}

const instrumentReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {...state, ...action.instruments};
    case LOAD_ONE:
      return {...state, selected: action.selected};
    case ADD_RENTAL:
      return {...state, rental: action.rental};
    case ADD_REVIEW:
      return {...state, review: action.review};
    case HOVER:
      return {...state, hover: action.instrument};
    case REMOVE:
      return state;
    default:
      return state;
  }
}

export default instrumentReducer;
