import ACTION_CONSTANTS from "./constants";

export const setLogin = (data) => ({
  type: ACTION_CONSTANTS.USER_LOGIN,
  payload: data,
});

export const setLogout = (data) => ({
  type: ACTION_CONSTANTS.USER_LOGOUT,
  payload: data,
});
