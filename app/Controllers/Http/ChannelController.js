'use strict';

const Channel = use('App/Models/Channel');
const JoinedChannel = use('App/Models/JoinedChannel');
const User = use('App/Models/User');

class ChannelController {
 async joinChannel({ request, auth, response}) {
    try{
      const { channel_name, topic } = request.all();
      let loggedin_user = await auth.getUser();
      if (!loggedin_user) {
        return response.status(400).json({
          status: 'error',
          message: 'Please Log in to perform this action',
          data: {},
        })
      }
      const new_channel = await Channel.findOrCreate({
        channel_name,
        topic
      });

      await JoinedChannel.create({
        channel_id: new_channel.id,
        user_id: loggedin_user.id,
      });
      return response.json({
        status: 'success',
        message: 'Group Joined successfully',
        data: new_channel
      })

    } catch(error) {
      return response.status(400).json({
        status: "error",
        message: error.message,
        data: {}
      });
    }
  }
  static async getUserJoinedChannel({ auth, response }){
    try {
      const loggedin_user = await auth.getUser();
      if (!loggedin_user) {
        return response.status(400).json({
            status: 'error',
            message: 'Please Log in to perform this action',
            data: {},
        })
      }
      const joined_channel = await loggedin_user.joinedChannels().fetch();
      return response.json({
        status: 'success',
        message: 'Data retreived successfully',
        data: joined_channel
      })
    }catch(error) {
      return response.status(400).json({
        status: "error",
        message: error.message,
        data: {}
      });
    }
  }

  async getChannelUsers({ auth, response, request }) {
    const loggedin_user = await auth.getUser();
    try{
      if (!loggedin_user) {
        return response.status(400).json({
            status: 'error',
            message: 'Please Log in to perform this action',
            data: {},
        })
      }
      const { channel_id } = request.all();
      const channels = await JoinedChannel.query().where('channel_id', channel_id).fetch()

      let joined_users = [];
      for(let user of channels.rows) {
        let userData = {};
        userData.channel = await Channel.find(user.channel_id);
        userData.user = await User.find(user.user_id);
        joined_users.push(userData)
      }
      return response.json({
        status: 'success',
        message: 'Data retreived successfully',
        data: joined_users
      })
    }catch(error) {
      return response.status(400).json({
        status: "error",
        message: error.message,
        data: {}
      });
    }
  }
}

module.exports = ChannelController;
