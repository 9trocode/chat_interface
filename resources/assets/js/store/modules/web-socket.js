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
      channel_list:false,
      joined_list:false
    },

    chat: {
      sending_message: false,
      receiving_message: false,
      messages: [],
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
    SOCKET_JOINED_CHANNEL_LIST(state, data) {
      state.channels.joined_list = data;
    },


    // Chat Mutation
    SOCKET_SET_SENDING_MESSAGE(state, data) {
      state.chat.sending_message = !state.chat.sending_message;
      state.chat.message.push(data.message)
    },
    SOCKET_SET_RECEIVING_MESSAGE(state, data) {
        state.chat.receiving_message = !state.chat.receiving_message;
        state.chat.message.push(data.message)
    }
  },
  actions: {
    async connectWs({commit}, data) {
      await WS.connect();
     let subscribe = await WS.subscribe('channels');
     subscribe.emit("get", data);
    },
    async privateChat({commit}, data) {
      await WS.connect();
     let subscribe = await WS.subscribe('chat');
     subscribe.emit("chatMessage", data);
    },
    async getPrivateChat({commit}, data) {
      await WS.connect();
      let subscribe = await WS.subscribe('chat');
      subscribe.emit("getChatMessage", data);
    }
  },
  getters: {
    getChannel: state => state.channels.channel_list,
    isSocketOn: state => state.socket.isConnected,
    getJoinedChannels: state => state.channels.joined_list
  }
};
