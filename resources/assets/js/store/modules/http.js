import Vue from 'vue';
import Auth from "../../services/http-integration";

export default {
  state: {
    loggedin: false,
    user: false,
    tokens: {
      access: null,
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state, user) {
      state.user = false;
    },
    setAccessToken(state, token) {
      localStorage.setItem("accessToken", token.token);
      state.tokens.access = token;
    },
    clearAccessToken(state) {
      localStorage.removeItem("accessToken");
      state.tokens.access = false;
    },
    setLoggedIn(state, status) {
      state.loggedin = status;
    }
  },
  actions: {
    authenticate({ commit }, data) {
      return Auth.authenticate(data).then(response => {
        commit("setLoggedIn", true);
        commit("setUser", response.data);
        commit("setAccessToken", response.token);
      });
    },
    logout({ commit }) {
      return Auth.logout(state.tokens).then(data => {
        commit("setLoggedIn", false);
        commit("setUser", false);
        // commit("clearAccessToken", false);
        // commit("clearRefreshToken", false);
      });
    },
  },
  getters: {
    user: state => state.user,
    loggedin: state => state.loggedin,
    accesstoken: state => state.tokens.access,
    auth: state => state,
  }
};
