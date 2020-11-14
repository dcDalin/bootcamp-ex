import { combineReducers, createStore, applyMiddleware } from "redux";

import { createLogger } from "redux-logger";
import counterReducer from "./counter"; // havent created this file

const loggerMiddleware = createLogger({});

let middeware = [];

if (process.env.NODE_ENV !== "production") {
  middeware = [...middeware, loggerMiddleware];
}

const reducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(reducer, {}, applyMiddleware(...middeware));

export default store;
