import { csrfFetch } from "./csrf";

const LOAD = "instrument/LOAD";

const load = instruments => ({
  type: LOAD,
  instruments
})

export const getInstruments = () => async dispatch => {
  const res = await csrfFetch("/api");
  const instruments = await res.json();
  dispatch(load(instruments));
};

// const initialState = { instruments: [""] }

const instrumentReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {...state, ...action.instruments};
    default:
      return state;
  }
}

export default instrumentReducer;
