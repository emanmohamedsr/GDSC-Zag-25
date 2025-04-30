import axios from "axios";
import { FETCH_PRODUCTS_FULFILLED, FETCH_PRODUCTS_REJECTED, FETCH_PRODUCTS_PENDING } from "./actionTypes.js";

// Action creators
const fetchProductsFulfilled = (payload) => ({
  type: FETCH_PRODUCTS_FULFILLED,
  payload
});

const fetchProductsRejected = (error) => ({
  type: FETCH_PRODUCTS_REJECTED,
  payload: error.message || 'Unknown error'
});

const fetchProductsPending = () => ({
  type: FETCH_PRODUCTS_PENDING
});

// Thunk action creator
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsPending());
    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch(fetchProductsFulfilled(response.data));
    }).catch((error) => {
      dispatch(fetchProductsRejected(error));
    })
  };
};
