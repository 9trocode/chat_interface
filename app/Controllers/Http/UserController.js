"use strict";

const User = use("App/Models/User");

class UserController {
  async register({ request, response, auth }) {
    const { username } = request.post();
    const userData  = username.trim();
    try {
      const user = await User.create({
        username: userData
      });
      console.log('Userd',user)
      let token = await auth.generate(user)
      return response.json({
        status: 'success',
        message: 'User log in successful',
        data: user,
        token
      })
    } catch (error) {
      console.log(error)
      return response.status(400).json({
        status: "error",
        message: error.message,
        data: {}
      });
    }
  }
  async login({ request, auth, response }) {
    // 
  }
  async logout({ auth, request, response }) {
    try {
      await auth.logout();
    } catch (error) {
      return error;
    }
  }
  async authenticate({ auth, response }) {
    try {
      const user = await auth.getUser();
      return response.json({
        status: "success",
        data: user
      });
    } catch (error) {
      response.status(400).json({
        status: "error",
        message: "Invalid processes"
      });
    }
  }
}

module.exports = UserController;
