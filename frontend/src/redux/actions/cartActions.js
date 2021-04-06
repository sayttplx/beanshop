
import * as actionTypes from "../constants/cartConstants";
import axios from "axios";


// function that has dispatch and getState as arguments, thunk helps us with this so we can do it async
export const addToCart = (id) => async (dispatch, getState) => {
  // request to our backend api to grap that id
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    // we are expecting the item in the reducer
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      price: data.price,
      desc: data.desc,
      eta: data.eta
    },
  });

// getState checks the updated store state after dispatching
// Sets the value of the storage object item
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const placeOrder = order => (dispatch, getState) => {
  dispatch({
    type: actionTypes.PLACE_ORDER,
    payload: {
      id: '#' + Math.floor(Math.random() * 16777215).toString(16),
      timestamp: new Date(),
      items: order
    }
  });

  localStorage.setItem("order", JSON.stringify(getState().cart.order));
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}

export const resetCart = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.CART_RESET
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const resetOrder = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.RESET_ORDER
  });

  localStorage.setItem("order", JSON.stringify(getState().cart.order));

}