import { csrfFetch } from "./csrf";

const LOAD = "home/GET_INSTRUMENTS";

const load = instruments => ({
  type: LOAD,
  instruments
})

export const getInstruments = () => async dispatch => {
  const res = await csrfFetch("/api");
  const instruments = await res.json();
  dispatch(load(instruments));
};

const initialState = { instruments: [""] }

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {...state, ...action.instruments};
    default:
      return state;
  }
}

export default homeReducer;
