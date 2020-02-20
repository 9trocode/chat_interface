import axios from "axios";

// const baseUrl = "http://0.0.0.0:3333/api/v1/";

export default {
  authenticate(data) {
    return axios
      .post("api/authenticate", data)
      .then(response => response.data)
      .catch(error => Promise.reject(error.response));
  },
  logout(data) {
    return axios
      .get(`api/logout`, data)
      .then(response => response.data)
      .catch(error => Promise.reject(error.response));
  },
};
