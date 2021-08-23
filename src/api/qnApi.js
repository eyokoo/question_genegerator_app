import { handleResponse, handleError } from "./apiUtils";

const url = "https://question-generator-app.herokuapp.com/questions"; //base url

export function getQuestions() {
  return fetch(url).then(handleResponse).catch(handleError);
}

export function getRandomQuestion() {
  return fetch(url + "/random").then(handleResponse).catch(handleError);
}

export function postQuestion(question) { //fetching url and making a POST command  
  return fetch(url, {
    method: "POST", // POST for create
    headers: { "content-type": "application/json" },
    body: JSON.stringify(question),
  })
    .then(handleResponse)
    .catch(handleError);
}



export function deleteQuestion(id) {
  return fetch(url + "/" + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}