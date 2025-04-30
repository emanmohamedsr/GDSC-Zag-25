import { FETCH_PRODUCTS_FULFILLED, FETCH_PRODUCTS_REJECTED, FETCH_PRODUCTS_PENDING } from "./actionTypes.js";


// Initial state
const initialState = {
  products: [],
  loading: false,
  error: null,
};

// Reducer
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_FULFILLED:
      return { ...state, products: action.payload, loading: false };
    case FETCH_PRODUCTS_REJECTED:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};