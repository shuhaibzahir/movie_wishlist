import ACTION_CONSTANTS from "./constants";

export const addToWishlist = (data) => ({
  type: ACTION_CONSTANTS.ADD_TO_WISHLIST,
  payload: data,
});

export const removeFromWishlist = (data) => ({
  type: ACTION_CONSTANTS.REMOVE_FROM_WISHLIST,
  payload: data,
});

export const setWishlistName = (data) => ({
  type: ACTION_CONSTANTS.SET_WISHLIST_NAME,
  payload: data,
});

export const setWishlist = (data) => ({
  type: ACTION_CONSTANTS.SET_WISHLIST,
  payload: data,
});

export const resetWishlist = () => ({
  type: ACTION_CONSTANTS.RESET_WISHLIST,
  payload: null,
});
