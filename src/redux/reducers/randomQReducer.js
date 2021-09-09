import * as ActionTypes from "../actions/actionTypes.js";

//reducer modifies the states in state.js
export default function randomQReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_RANDOM_QUESTION_SUCCESS:
      return action.question;
    case ActionTypes.LOAD_QUESTION_BY_ID_SUCCESS:
      return action.questionId;
    case ActionTypes.LOAD_QUESTION_BY_C_SUCCESS:
      return action.question;
    default:
      return state;
  }
}
