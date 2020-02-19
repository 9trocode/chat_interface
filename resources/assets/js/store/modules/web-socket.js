import Vue from 'vue';
import WS from "../../services/web-socket-intgration";

export default {
  state: {
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false,
    },
    channels:{
      channel_list:false
    }
  },
  mutations: {
    // Sockets connection Mutations
    SOCKET_ONOPEN(state, event) {
      state.socket.isConnected = true
    },
    SOCKET_ONCLOSE(state, event) {
      state.socket.isConnected = false
    },
    SOCKET_ONERROR(state, event) {
      state.socket.reconnectError = true;
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE(state, message) {
      state.socket.message = message
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
    },



    // Channels Mutations
    SOCKET_SET_CHANNEL_LIST(state, data) {
      state.channels.channel_list = data;
    },
  },
  actions: {
    async connectWs({commit}, data) {
      await WS.connect();
     let subscribe = await WS.subscribe('channels');
     subscribe.emit("get", { user: 'Alex', name });
    },
  },
  getters: {}
};
