import { combineReducers } from "redux";

import questionsArray from "./questionReducer";

import randomQuestion from "./randomQReducer"

export default combineReducers({ questionsArray, randomQuestion});