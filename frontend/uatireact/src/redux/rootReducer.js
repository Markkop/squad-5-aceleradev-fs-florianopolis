import loginReducer from "./login/reducer";
import userReducer from "./user/reducer";
import notificationReducer from "./notification/reducer";
import importReducer from "./import/reducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  userReducer,
  loginReducer,
  notificationReducer,
  importReducer
});

export default rootReducers;
