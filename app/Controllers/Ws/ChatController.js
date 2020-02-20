'use strict'
const User = use("App/Models/User");
const Message = use("App/Models/Message");
const Channel = use("App/Models/Channel")
class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
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
      const { receiver_id, sender_id, message } = data;
      const user = User.query().where('id', receiver_id).fetch();
      if (!user) {
        this.socket.broadcastToAll('error', 'User not found')
      }
      await Message.create(data);
      this.socket.broadcastToAll(`chat:private:${receiver_id}:${sender_id}`, message)
  }

  async onGetChatMessage (data) {
    const { message } = data;
    this.socket.broadcastToAll(`chat:private:${receiver_id}:${sender_id}`, message)
  }

  async onSendChannelMessage (data) {
    const { channel_id, message } = data;
    const channel = await Channel.query().where('id', channel_id);
    if (!channel) {
      this.socket.broadcastToAll('error', 'No such channel exists');
    }
    const channel_users = channel.users().fetch();
    await Message.create(data);
    this.socket.broadcastToAll(`chat:channel:${channel_id}`, message);
  }

  async onGetChannelMessage(data) {
    const { channel_id } = data;
    const channel = await Channel.query().where('id', channel_id);
    if (!channel) {
      this.socket.broadcastToAll('error', 'No such channel exists');
    }
    const channel_users = channel.users().fetch();
    this.socket.broadcastToAll(`chat:channel:${channel_id}`, message);
  }

//   async onClose (error) {
//     // same as: socket.on('close')
//    this.socket.broadcastToAll('error',error)
//   }
// ​
//   async onError (error) {
//     // same as: socket.on('error')
//     this.socket.broadcastToAll('error',error)
//   }

}

module.exports = ChatController
