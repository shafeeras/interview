import { combineReducers } from "redux";
import { LOGIN } from "../actions/Login";
import appReducer from "./App";
import loginReducer from "./Login";
import commonReducer from "./Common";
import moviesReducer from "./Movies";

const rootReducer = combineReducers({
  appReducer,
  commonReducer,
  loginReducer,
  moviesReducer
});

export const reducer = (state, action) => {
  let newState = { ...state };
  if (action.type === LOGIN.logout) {
    newState = {};
  }
  return rootReducer(newState, action);
};
