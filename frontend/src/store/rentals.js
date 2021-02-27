import { csrfFetch } from "./csrf";

const LOAD = "myrentals/LOAD";

const load = rentals => ({
  type: LOAD,
  rentals
})

export const findMyRentals = userId => async dispatch => {
  const res = await csrfFetch(`/api/users/${userId}/rentals`);
  const myRentals = await res.json();

  if (res.ok) {
    dispatch(load(myRentals));
  }
};

const rentalsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {...state, ...action.rentals};
    default:
      return state;
  }
}

export default rentalsReducer;
