import * as authApi from "../../api/authApi";
import * as ActionTypes from "./actionTypes";

export const signInUser = (user) => {
  return function (dispatch) {
    return authApi
      .signIn(user)
      .then((userAccount) => dispatch(signInUserSuccess(userAccount)))
      .catch((error) => console.log(error));
  };
}

export const signInUserSuccess = (user) => {
  return {
    type: ActionTypes.SIGNIN_USER_SUCCESS,
    user,
  };
}

export const signUpUser = (newUser) => {
  return function (dispatch) {
    return authApi
      .signUp(newUser)
      .then((userAccount) => dispatch(signUpUserSuccess(userAccount)))
      .catch((error) => console.log(error));
  };
}

export const signUpUserSuccess = (user) => {
  return {
    type: ActionTypes.SIGNUP_USER_SUCCESS,
    user,
  };
}