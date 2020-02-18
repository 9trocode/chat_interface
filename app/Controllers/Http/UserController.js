"use strict";

const User = use("App/Models/User");
const { validate } = use('Validator')

class UserController {
  async register({ request, response, auth }) {
    const rules = {
      username: 'required'
    }
    const validation = await validate(request.post(), rules);
    if (validation.fails()) {
      return response.json({
        status: 'error',
        message: validation.messages()[0].message
      })
    }
    const { username } = request.post();
    const userData  = username.trim();
    try {
      const user = await User.create({
        username: userData
      });
      let token = await auth.generate(user)
      return response.json({
        status: 'success',
        message: 'User log in successful',
        data: user,
        token
      })
    } catch (error) {
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
