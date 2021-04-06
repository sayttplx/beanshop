import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/cartReducers";
import { getProductsReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer
});

// Helps us to do async request in our actions
const middleware = [thunk];

// Retrieve the object from storage
const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const orderInLocalStorage = localStorage.getItem("order")
  ? JSON.parse(localStorage.getItem("order"))
  : null;

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
    order: orderInLocalStorage
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;