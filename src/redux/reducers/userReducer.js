import * as ActionTypes from "../actions/actionTypes";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.SIGNIN_USER_SUCCESS:
    case ActionTypes.SIGNUP_USER_SUCCESS:
      return { ...state, ...action.user };
    default:
      return state;
  }
}