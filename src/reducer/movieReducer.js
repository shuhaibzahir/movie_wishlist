import ACTION_CONSTANTS from "../actions/constants";

 const initialState = {
  selectedImDbId: null,
  searchText: ""
   
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.SET_IMDB_ID:
      return {...state,selectedImDbId:action.payload}
    case ACTION_CONSTANTS.SET_SEARCH_TEXT:
      return {...state,searchText:action.payload}
    case ACTION_CONSTANTS.RESET_MOVIE:
        return initialState
    default:
      return state;
  }
};

export default movie;