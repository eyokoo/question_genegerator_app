import { handleResponse, handleError, getHeaders } from "./apiUtils";


// const url = "https://question-generator-app.herokuapp.com/questions"; //base url
const url = "http://localhost:9000/questions"; //base url

export function getQuestions() {
  return fetch(url).then(handleResponse).catch(handleError);
}

export function getQuestionById(questionId) {
  return fetch(`${url}/${questionId}`).then(handleResponse).catch(handleError);
}

export function getRandomQuestion() {
  return fetch(url + "/random").then(handleResponse).catch(handleError);
}

export function getRandomQuestionByC() {
  return fetch(url + "/random").then(handleResponse).catch(handleError);
}


export function postQuestion(question) { //fetching url and making a POST command  
  return fetch(url, {
    method: "POST", // POST for create
    headers: getHeaders(),
    body: JSON.stringify(question),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function updateQuestion(question) { //fetching url and making a POST command  
  return fetch(url,{
    method: "PUT", // PUT for update
    headers: getHeaders(),
    body: JSON.stringify(question),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteQuestion(questionId) {
  return fetch(`${url}/${questionId}`, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}