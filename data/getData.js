const axios = require('axios');
import {urlGetAllUsers} from './constants';
export function getAllUsers() {
  const data = axios.get(urlGetAllUsers).then((response) => response.data);

  return data;
}

export function getUserById(id) {
  const data = axios
    .get(urlGetAllUsers + '/' + id)
    .then((response) => response.data);

  return data;
}

export function createUser(firstname, lastname) {
  axios.post(urlGetAllUsers, {
    firstname: firstname,
    lastname: lastname,
  });
}

export function deleteUserById(id) {
  const data = axios
    .delete(urlGetAllUsers + '/' + id)
    .then((response) => response.config)
    .then((resp) => resp.method);
  return data;
}
