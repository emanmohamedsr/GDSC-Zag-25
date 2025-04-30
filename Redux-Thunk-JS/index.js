import { store } from "./redux/store.js";
import { fetchProducts } from "./redux/products/actionCreators.js";
import { fetchUsers } from "./redux/users/actionCreators.js";

store.dispatch(fetchProducts());
store.dispatch(fetchUsers());

const unsubscribe = store.subscribe(() => {
  console.log('State:', store.getState());
});

setTimeout(unsubscribe, 5000);
