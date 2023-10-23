export const ADD_TO_CART = 'add_to_cart';
export const REMOVE_FROM_CART = 'remove_from_cart';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}
export function removeFromCart(name) {
  return {
    type: REMOVE_FROM_CART,
    payload: name,
  };
}
