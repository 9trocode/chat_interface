import Auth from "../../services/web-socket-intgration";

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
  SOCKET_ONOPEN (state, event)  {
    Vue.prototype.$socket = event.currentTarget;
    state.socket.isConnected = true
  },
  SOCKET_ONCLOSE (state, event)  {
    state.socket.isConnected = false
  },
  SOCKET_ONERROR (state, event)  {
    console.error(state, event)
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE (state, message)  {
    state.socket.message = message
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    console.info(state, count)
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
