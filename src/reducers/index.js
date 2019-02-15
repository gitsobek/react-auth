import { combineReducers } from "redux";
import userReducer from "./user";
import itemsReducer from "./items";

export default combineReducers({
  user: userReducer,
  items: itemsReducer
});
