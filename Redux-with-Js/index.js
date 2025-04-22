// Importing redux library
const redux = require('redux');

// Constants
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// Initial States
let cakeInitialState = {
  numOfCakes: 10
}
let iceCreamInitialState = {
  numOfIceCreams: 20
}

// Action Creators
const buyCake = (payload = 1) => {
  return {
    type: BUY_CAKE,
    payload: payload
  }
}
const buyIceCream = (payload = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: payload
  }
}

// Reducers
const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - action.payload }
    default:
      return state
  }
}
const icecreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCreams: state.numOfIceCreams - action.payload }
    default:
      return state
  }
}

// Combine Reducers
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer
})

// Create Store
const store = redux.createStore(rootReducer);

// ConsoleLog Initial State
console.log('Initial State:', store.getState())

// Subscribe to Store
const unSubscribe = store.subscribe(() => {
  console.log("Updated State:", store.getState())
})

// Dispatch Actions
store.dispatch(buyCake(2))
store.dispatch(buyCake())
store.dispatch(buyIceCream(3))
store.dispatch(buyIceCream())
store.dispatch(buyIceCream(2))

// Unsubscribe to Store
unSubscribe()
