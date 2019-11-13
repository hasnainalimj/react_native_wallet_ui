import { combineReducers } from "redux";
// import { layoutReducer } from "./layout";
// import { gettingStartedReducer } from "./gettingStarted";
import { loginReducer } from "./login";

export const rootReducer = combineReducers({
  login: loginReducer
});
