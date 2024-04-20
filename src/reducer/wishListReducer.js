import ACTION_CONSTANTS from "../actions/constants";
 
 
const initialState = {
  name:  "my wishlist",
  movies:  [],
  moviesIds:  []
   
};

const whishlist = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.RESET_WISHLIST:
      return initialState
    case ACTION_CONSTANTS.ADD_TO_WISHLIST:
         return {...state,movies:[...state.movies,action.payload], moviesIds:[...state.moviesIds,action.payload.imdbID]}
    case ACTION_CONSTANTS.REMOVE_FROM_WISHLIST:
        return {...state,movies:state.movies.filter(movie=>movie.imdbID!==action.payload.id),moviesIds:state.moviesIds.filter(id=>id!==action.payload.id)}
    case ACTION_CONSTANTS.SET_WISHLIST_NAME:
         return {...state,name:action.payload}
    case ACTION_CONSTANTS.SET_WISHLIST:
         return {...state,movies:action.payload.movies, moviesIds:action.payload?.movies?.map(i=>i.imdbID), name:action.payload.name}
    default:
      return state;
  }
};

export default whishlist;