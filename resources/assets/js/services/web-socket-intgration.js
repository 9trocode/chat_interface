import store from "../store/store";
import Ws from '@adonisjs/websocket-client';

import {getSocketProtocol} from '../utils/data';

export class SocketConnection {
  connect() {
    let token = localStorage.getItem("accessToken");
    // console.log(token);
    this.ws = Ws(`${getSocketProtocol()}0.0.0.0:3333`)
      .withJwtToken(token)
      .connect();


    this.ws.on('open', () => {
      store.commit("SOCKET_ONOPEN", this);
      return 'Connection initialized';
    });

    this.ws.on('close', () => {
      store.commit("SOCKET_ONCLOSE", this);
      return 'Connection closed'
    });

    this.ws.on('error', (error) => {
      store.commit("SOCKET_ONERROR", error);
      return (error)
    });

    this.ws.on('leaveError', (error) => {
      store.commit("SOCKET_RECONNECT_ERROR", error);
      return (error)
    });

    return this
  }

  subscribe(channel, handler) {
    if (!this.ws) {
      setTimeout(() => this.subscribe(channel), 1000)
    } else {
      const result = this.ws.subscribe(channel);
      result.on('message', message => {
        return (message)
      });

      result.on('getChannels', data => {
        store.commit("SOCKET_SET_CHANNEL_LIST", data.data);
        return (data)
      });

      result.on('error', (error) => {
        return error;
      });

      return result
    }
  }
}

export default new SocketConnection()
