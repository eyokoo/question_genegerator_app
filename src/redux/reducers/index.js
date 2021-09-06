import { combineReducers } from "redux";

import questionsArray from "./questionReducer";
import randomQuestion from "./randomQReducer"
import user from "./userReducer"

export default combineReducers({ questionsArray, randomQuestion, user});