import { csrfFetch } from "./csrf";


const FINDALL = "search/FINDALL"

const find = found => ({
  type: FINDALL,
  found
});

export const findInstruments = searchList => async dispatch => {
  let query = [];

  for (let i = 0; i < searchList.length; i++) {
    let id = searchList[i];
    let res = await csrfFetch(`/api/search/${id}`);
    let instrument = await res.json();
    query.push(instrument);
  }

  dispatch(find(query));
}

const searchReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case FINDALL:
      return {...state, ...action.found};
    default:
      return state
  }
}

export default searchReducer;
