import { csrfFetch } from "./csrf";

const LOAD = "instrument/LOAD";
const LOAD_ONE = "instrument/LOAD_ONE"

const load = instruments => ({
  type: LOAD,
  instruments
})

const loadOne = instrument => ({
  type: LOAD_ONE,
  instrument
})

export const getInstruments = () => async dispatch => {
  const res = await csrfFetch("/api");
  const instruments = await res.json();
  dispatch(load(instruments));
};

export const getOneInstrument = (id) => async dispatch => {
  const res = await csrfFetch(`/api/instruments/${id}`);
  const instrument = await res.json();

  if (res.ok) {
    dispatch(loadOne(instrument));
  }
}

const instrumentReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {...state, ...action.instruments};
    case LOAD_ONE:
      return {...state, ...action.instrument}
    default:
      return state;
  }
}

export default instrumentReducer;
