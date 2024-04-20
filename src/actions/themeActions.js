import ACTION_CONSTANTS  from './constants';

export const setTheme = (data) => ({
  type: ACTION_CONSTANTS.SET_THEME,
  payload: data,
});

export const setPrimary = (data) => ({
  type: ACTION_CONSTANTS.SET_PRIMARY_COLOR,
  payload: data,
});

export const resetTheme = () => ({
  type: ACTION_CONSTANTS.RESET_THEME,
  payload: null,
});