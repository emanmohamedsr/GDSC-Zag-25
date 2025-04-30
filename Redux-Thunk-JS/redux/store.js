import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

import { productsReducer } from "./products/reducer.js";
import { usersReducer } from './users/reducer.js';

const roorReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
})

export const store = createStore(
  roorReducer,
  applyMiddleware(thunk, logger.createLogger())
);