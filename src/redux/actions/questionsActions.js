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
    questions, //THIS IS BEING REFERENCED IN THE REDUCER
  };
}

//LOAD QUESTION BY ID
export const loadQuestionById = () => {
  return function (dispatch) {
    return qnApi
      .getQuestionById()
      .then((qnFromApi) => dispatch(loadQuestionByIdSuccess(qnFromApi)))
      .catch((error) => console.log(error));
  };
}
export const loadQuestionByIdSuccess = (questionId) => {
  return {
    type: ActionTypes.LOAD_QUESTION_BY_ID_SUCCESS,
    questionId, //THIS IS BEING REFERENCED IN THE REDUCER
  };
}

export const loadRandomQuestion = () => {
  return function (dispatch) {
    return qnApi
      .getRandomQuestion()
      .then((qnFromApi) => dispatch(loadRandomQuestionSuccess(qnFromApi)))
      .catch((error) => console.log(error));
  };
}
export const loadRandomQuestionSuccess = (question) => {
  return {
    type: ActionTypes.LOAD_RANDOM_QUESTION_SUCCESS,
    question,
  };
}

export const loadRandomQuestionByC = () => {
  return function (dispatch) {
    return qnApi
      .getRandomQuestionByC()
      .then((qnFromApi) => dispatch(loadRandomQuestionByCSuccess(qnFromApi)))
      .catch((error) => console.log(error));
  };
}

export const loadRandomQuestionByCSuccess = (questionId) => {
  return {
    type: ActionTypes.LOAD_QUESTION_BY_ID_SUCCESS,
    questionId, //THIS IS BEING REFERENCED IN THE REDUCER
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

export const updateQuestion = (question) => {
  return function (dispatch) {
    return qnApi
      .updateQuestion(question)
      .then((updQuestion) => dispatch(updateQuestionSuccess(updQuestion)))
      .catch((error) => console.log(error));
  };
}
export const updateQuestionSuccess = (question) => {
  return {
    type: ActionTypes.UPDATE_QUESTION,
    question: question,
  };
}

export const deleteQuestion = (questionId) => {
  console.log("***inside deleteQuestion")
  return function (dispatch) {
    //connect to the outside - API
    //start of the API call
    return qnApi
      .deleteQuestion(questionId)
      //end of the API call
      .then(() => dispatch(deleteQuestionSuccess(questionId))) //dispatch an action which is the deleteQuestionSuccess function
      .catch((error) => console.log("error in deleteQuestion function", error));//when the API cal was not successful
  }

}
export const deleteQuestionSuccess = (questionId) => {
  return {
    type: ActionTypes.DELETE_QUESTION_SUCCESS,
    questionId: questionId,
  }
}

//is in charge of telling the store that the previous event was successful