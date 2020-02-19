'use strict';
const Channel = use('App/Models/Channel');
const JoinedChannel = use('App/Models/JoinedChannel');
const User = use('App/Models/User');

class ChannelController {
  constructor ({ socket, request }) {
    this.socket = socket;
    this.request = request;

    console.log('A new subscription for Channels topic', socket.topic)
  }


  async onGet (data) {
    let allChannels = await Channel.query().fetch();

    let responseData = {
      status: 'success',
      message: 'Channels Fetched successfully',
      data: allChannels
    };

    this.socket.broadcastToAll('channelsFn', responseData)
  }


  async onJoin (data) {

  }

  async  onClose () {
    // same as: socket.on('close')
    console.log('Closing subscription for room topic', this.socket.topic);
  }

  async  onError (me) {
    // same as: socket.on('error')
    console.log(me);

  }
}

module.exports = ChannelController;
