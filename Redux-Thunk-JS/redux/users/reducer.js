import { FETCH_USERS_FULFILLED, FETCH_USERS_REJECTED, FETCH_USERS_PENDING } from "./actionTypes.js";

const initialState = {
  users: [],
  loading: false,
  error: null,
}

// Reducer
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_FULFILLED:
      return { ...state, users: action.payload, loading: false }
    case FETCH_USERS_PENDING:
      return { ...state, loading: true, error: null }
    case FETCH_USERS_REJECTED:
      return { ...state, error: action.payload, loading: false }
    default:
      return state;
  }
}