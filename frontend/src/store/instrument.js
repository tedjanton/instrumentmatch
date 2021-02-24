import { csrfFetch } from "./csrf";

const LOAD = "instrument/LOAD";
const LOAD_ONE = "instrument/LOAD_ONE"

const load = instruments => ({
  type: LOAD,
  instruments
})

const loadOne = (selected) => ({
  type: LOAD_ONE,
  selected
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

const instrumentReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {...state, ...action.instruments};
    case LOAD_ONE:
      return {...state, selected: action.selected.instrument}
    default:
      return state;
  }
}

export default instrumentReducer;
