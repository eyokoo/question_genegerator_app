import * as ActionTypes from "./actionTypes";
import * as qnApi from "../../api/qnApi";

export const loadQuestions = () => {
  return function (dispatch) {
    return qnApi
    .getQuestions()
      .then((qnFromApi) => dispatch(loadQuestionsSuccess(qnFromApi)))
      .catch((error) => console.log(error));
  };
}

export const loadQuestionsSuccess = (questions) => {
  return {
    type: ActionTypes.LOAD_QUESTIONS_SUCCESS,
    questions,
  };
}

export const postQuestion = (question) => {
  return function (dispatch) {
    return qnApi
      .postQuestion(question)
      .then((newQuestion) => dispatch(postQuestionSuccess(newQuestion)))
      .catch((error) => console.log(error));
  };
}

export const postQuestionSuccess = (question) => {
  return {
    type: ActionTypes.POST_QUESTION,
    question: question,
  };
}

export const deleteQuestion = (questionId) => {
  return function (dispatch) {
    //connect to the outside - API
    //start of the API call
    return qnApi
    .deleteQuestion(questionId) 
    //end of the API call
    .then(() => dispatch(deleteQuestionSuccess(questionId))) //dispatch an action which is the deleteRecipeSuccess function
    .catch((error) => console.log(error));//when the API cal was not successful
  }
}

//is in charge of telling the store that the previous event was successful
export const deleteQuestionSuccess = (questionId) => {
  return {
    type: ActionTypes.DELETE_QUESTION_SUCCESS,
    questionId: questionId,
  }
}