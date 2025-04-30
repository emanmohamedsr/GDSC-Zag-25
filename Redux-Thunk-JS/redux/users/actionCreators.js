import axios from "axios";
import { FETCH_USERS_FULFILLED, FETCH_USERS_REJECTED, FETCH_USERS_PENDING } from "./actionTypes.js";
// Action creators
const fetchUsersFulfilled = (users) => {
  return {
    type: FETCH_USERS_FULFILLED,
    payload: users
  }
}
const fetchUsersRejected = (error) => {
  return {
    type: FETCH_USERS_REJECTED,
    payload: error
  }
}
const fetchUsersPending = () => {
  return {
    type: FETCH_USERS_PENDING,
  }
}

// Thunk action creator
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersPending());
    axios.get('https://fakestoreapi.com/users')
      .then((response) => {
        dispatch(fetchUsersFulfilled(response.data));
      })
      .catch((error) => {
        dispatch(fetchUsersRejected(error));
      });
  }
}
