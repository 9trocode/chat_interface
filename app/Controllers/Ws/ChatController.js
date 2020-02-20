'use strict';
const User = use("App/Models/User");
const Message = use('App/Models/Message')


class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket;
    this.request = request;

    console.log('A new subscription for room topic', socket.topic)
  }

 async onMessage (message) {
    // same as: socket.on('message')
    console.log('got message', message);
    let users = await User.query().fetch();
    this.socket.broadcastToAll('message', users)
  }
  async onChatMessage (data) {
    // same as: socket.on('chatMessage')
    try{
      await Message.create(data);
    }catch(error) {
      console.error(error)
    }

  }

 async onClose (error) {
    // same as: socket.on('close')
   this.socket.broadcastToAll('error',error)
  }

  async onError (error) {
    // same as: socket.on('error')
    this.socket.broadcastToAll('error',error)
  }
}

module.exports = ChatController;
