import Auth from "../../services/Auth";

const state = {
  loggedin: false,
  user: false,
  tokens: {
    access: null,
    refresh: null
  }
};

const getters = {
  user() {
    return state.user;
  },
  isAdmin() {
    // return typeof state.user.isAdmin !== undefined && state.user.isAdmin;
    return true;
  },
  loggedin() {
    return state.loggedin;
  },
  accesstoken() {
    return state.tokens.access;
  },
  refreshtoken() {
    return state.tokens.refresh;
  },
  auth() {
    return state;
  }
};

const actions = {
  register({ commit }, credentials) {
    return Auth.register(credentials);
  },
  login({ commit }, credentials) {
    return Auth.login(credentials).then(response => {
      commit("setLoggedIn", true);
      commit("setUser", response.data);
      // commit("setAccessToken", data.token.token);
      // commit("setRefreshToken", data.token.refreshToken);
    });
  },
  authenticate({ commit }) {
    return Auth.authenticate().then(response => {
      commit("setLoggedIn", true);
      commit("setUser", response.data);
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
  forgotPassword({ commit }, credentials) {
    return Auth.recovery(credentials);
  },
  resetPassword({ commit }, credentials) {
    return Auth.reset(credentials);
  }
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  clearUser(state, user) {
    state.user = false;
  },
  setAccessToken(state, token) {
    localStorage.setItem("accessToken", token);
    state.tokens.access = token;
  },
  clearAccessToken(state) {
    localStorage.removeItem("accessToken");
    state.tokens.access = false;
  },
  setRefreshToken(state, token) {
    localStorage.setItem("refreshToken", token);
    state.tokens.refresh = token;
  },
  clearRefreshToken(state) {
    localStorage.removeItem("refreshToken");
    state.tokens.refresh = false;
  },
  setLoggedIn(state, status) {
    state.loggedin = status;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
