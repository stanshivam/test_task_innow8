import { combineReducers } from "redux";
import authReducer from "./authReducer";
import albums from "./albumsReducer";

const rootReducer = combineReducers({
  authReducer,
  albums,
});

export default rootReducer;
