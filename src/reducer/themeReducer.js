import ACTION_CONSTANTS from "../actions/constants";
 
const initialState = {
  theme: "light",
  primary:"#D20062"
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ACTION_CONSTANTS.SET_THEME:
      return {...state,theme:action.payload}
    case ACTION_CONSTANTS.SET_PRIMARY_COLOR:
      return {...state,primary:action.payload}
    case ACTION_CONSTANTS.RESET_THEME:
        return initialState
    default:
      return state;
  }
};

export default ThemeReducer;