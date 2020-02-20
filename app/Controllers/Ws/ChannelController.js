'use strict';
const Channel = use('App/Models/Channel');
const JoinedChannel = use('App/Models/JoinedChannel');
const User = use('App/Models/User');

class ChannelController {
  constructor({socket, request}) {
    this.socket = socket;
    this.request = request;
  }


  async onGet(data) {
    let allChannels = await Channel.query().fetch();

    let responseData = {
      status: 'success',
      message: 'Channels Fetched successfully',
      data: allChannels
    };

    this.socket.broadcastToAll('getChannels', responseData)
  }


  async onJoin(data) {
    let joinedChannels = await JoinedChannel.findOrCreate({
      channel_id: data.channel_id,
      user_id: data.user_id,
    });

    let responseData = {
      status: 'success',
      message: 'Joined Channels Successfully fetched',
      data: joinedChannels
    };

    this.socket.broadcastToAll('joinChannel', responseData)
  }




  //Error Handlers
  async onClose(error) {
    // same as: socket.on('close')
    this.socket.broadcastToAll('error', error)
  }

  async onError(error) {
    // same as: socket.on('error')
    this.socket.broadcastToAll('error', error)
  }
}

module.exports = ChannelController;
