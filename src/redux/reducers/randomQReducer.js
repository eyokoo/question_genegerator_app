import * as ActionTypes from "../actions/actionTypes.js";

//reducer modifies the states in state.js
export default function randomQReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_RANDOM_QUESTION_SUCCESS:
      return action.question
    default:
      return state;
  }
}
