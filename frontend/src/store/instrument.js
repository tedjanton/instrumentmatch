import { csrfFetch } from "./csrf";

const LOAD = "instrument/LOAD";
const LOAD_ONE = "instrument/LOAD_ONE";
const ADD_RENTAL = "instrument/ADD_RENTAL";

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
}

export const postRental = (rental) => async dispatch => {
  const { userId, instrumentId, rentalStartDate, rentalEndDate } = rental;
  const res = await csrfFetch(`/api/instruments/${userId}/rental`, {
    method: "POST",
    body: JSON.stringify({
      userId,
      instrumentId,
      rentalStartDate,
      rentalEndDate })
  });

  const data = await res.json();
  dispatch(addRental(data))
}

const instrumentReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {...state, ...action.instruments};
    case LOAD_ONE:
      return {...state, selected: action.selected.instrument};
    case ADD_RENTAL:
      return {...state, rental: action.rental}
    default:
      return state;
  }
}

export default instrumentReducer;
