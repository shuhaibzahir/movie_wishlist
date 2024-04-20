import ACTION_CONSTANTS  from './constants';

export const setMovieSearchText = (data) => ({
  type: ACTION_CONSTANTS.SET_SEARCH_TEXT,
  payload: data,
});

export const setSelectMovie = (data) => ({
    type: ACTION_CONSTANTS.SET_IMDB_ID,
    payload: data,
  });

export const resetMovie = () => ({
    type: ACTION_CONSTANTS.RESET_MOVIE,
    payload: null,
  });