import { SPOTIFY_LOGIN, SPOTIFY_LOGOUT } from "../constants/authConstants";
import config from "../config";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPOTIFY_LOGIN:
      // store it in store as well as local storage
      localStorage.setItem(config.testUser, JSON.stringify(action.user)); // should create seperate service for this
      return {
        ...state,
        user: action.user,
      };
    case SPOTIFY_LOGOUT:
      localStorage.removeItem(config.testUser);
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
