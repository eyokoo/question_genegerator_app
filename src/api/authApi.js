import {
  handleResponse,
  handleError,
  storeTokenOnLocalStorage,
} from "./apiUtils";

const authUrl = `${process.env.REACT_APP_API_URL}/auth`;

export function signIn(user) {
  return fetch(`${authUrl}/signin`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .then(storeTokenOnLocalStorage)
    .catch(handleError);
}

export function signUp(newUser) {
  return fetch(`${authUrl}/signup`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then(handleResponse)
    .then(storeTokenOnLocalStorage)
    .catch(handleError);
}