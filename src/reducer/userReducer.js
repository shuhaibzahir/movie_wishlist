import ACTION_CONSTANTS from "../actions/constants";

const existingUser = localStorage.getItem("user");
const initialState = {
  logined: existingUser ? true: false,
  userEmail: existingUser ? JSON.parse(existingUser).email: null,
   
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.USER_LOGIN:
      localStorage.setItem("user", JSON.stringify(action.payload))
      return {...state,logined:true, userEmail: action.payload.email}
    case ACTION_CONSTANTS.USER_LOGOUT:
      localStorage.removeItem("user")
      return {...state,userEmail:null,logined:false}
    default:
      return state;
  }
};

export default user;