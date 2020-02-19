import axios from "axios";

// const baseUrl = "http://127.0.0.1:3333/api/v1/";

export default {
  login(data) {
    return axios
      .post("api/login", data)
      .then(response => response.data)
      .catch(error => Promise.reject(error.response));
  },
  refresh(data) {
    return axios
      .post(`${baseUrl}auth/token/refresh`, data)
      .then(response => response.data)
      .catch(error => Promise.reject(error.response));
  },
  register(data) {
    return axios
      .post(`api/register`, data)
      .then(response => response.data)
      .catch(error => Promise.reject(error.response));
  },
  recovery(data) {
    return axios
      .post(`${baseUrl}auth/recovery`, data)
      .then(response => response.data)
      .catch(error => Promise.reject(error.response));
  },
  reset(data) {
    return axios
      .post(`${baseUrl}auth/reset`, data)
      .then(response => response.data)
      .catch(error => Promise.reject(error.response));
  },
  logout(data) {
    return axios
      .get(`api/logout`, data)
      .then(response => response.data)
      .catch(error => Promise.reject(error.response));
  },
  authenticate() {
    return axios
      .get(`api/authenticate`)
      .then(response => response.data)
      .catch(error => Promise.reject(error.response));
  }
};
