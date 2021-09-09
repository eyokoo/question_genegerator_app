import * as ActionTypes from "../actions/actionTypes.js";

//reducer modifies the states in state.js
export default function questionReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_QUESTIONS_SUCCESS:
      return action.questions;
    case ActionTypes.POST_QUESTION:
      return [...state, action.question];
    case ActionTypes.DELETE_QUESTION_SUCCESS:
      return state.filter((r) => r.id !== action.questionId); //the filter will not modify the existing array but it will return the new array. fitlering the array and retunring everything that doesn't match with questionId
    case ActionTypes.UPDATE_QUESTION_SUCCESS:
      return state.map((question) =>
        question.id === action.updQuestion.id ? action.updQuestion : question);
    default:
      return state;
  }
}