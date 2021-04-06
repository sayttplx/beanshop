import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
  cartItems: []
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      // we spread the state and add the new item inside of the cartItems
      return {
        ...state,
        cartItems: [...state.cartItems, item]
      };
    case actionTypes.REMOVE_FROM_CART:
      // Find index of first instance of id in cart
      const foundIndex = state.cartItems
        .map(({id}) => id)
        .findIndex(id => id === action.paylod)
      
      if(foundIndex === -1) return state
      
      // Remove first instance of product from cart
      const newCart = state.cartItems
        .slice(0, foundIndex)
        .concat(state.cartItems.slice(foundIndex + 1, state.cartItems.length))

      return {
        ...state,
        cartItems: newCart
      };
    case actionTypes.CART_RESET:
      // Clear cart
      return {
        ...state,
        cartItems: []
      }
    case actionTypes.PLACE_ORDER:
      return {
        ...state,
        cartItems: [],
        order: action.payload
      }
    case actionTypes.RESET_ORDER:
      return {
        ...state,
        order: null
      }
    default:
      return state;
  }
};