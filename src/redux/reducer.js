import {ADD_TO_CART, REMOVE_FROM_CART} from './action';

const initialState = {cartItems: []};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cartItems: [...state.cartItems, action.payload]};
    case REMOVE_FROM_CART:
      const result = state.cartItems.filter(element => {
        return element.name !== action.payload;
      });
      return {...state, cartItems: result};
    default:
      return state;
  }
};
