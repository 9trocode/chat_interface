import Ws from '@adonisjs/websocket-client';

import { getSocketProtocol } from '../utils/data';

export class SocketConnection {
  connect () {
    this.ws = Ws(`${getSocketProtocol()}staging-chatyard.herokuapp.com`)
      // .withApiToken(token)
      .connect();


    this.ws.on('open', () => {
      console.log('Connection initialized');
      console.log('test',getSocketProtocol);
    });

    this.ws.on('close', () => {
      console.log('Connection closed')
    });

    this.ws.on('error', (error) => {
      console.log('Error Loaded', error)
    });

    this.ws.on('leaveError', (response) => {
      console.log('leave',response)
    });

    return this
  }

  subscribe (channel, handler) {
    if (!this.ws) {
      setTimeout(() => this.subscribe(channel), 1000)
    } else {
      const result = this.ws.subscribe(channel);
      result.on('message', message => {
        console.log('Incoming', message);
        return(message)
      });

      result.on('error', (error) => {
        console.error(error)
      });

      return result
    }
  }
}

export default new SocketConnection()
