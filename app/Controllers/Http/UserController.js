"use strict";

const User = use("App/Models/User");

class UserController {
  async register({ request, response, auth }) {
    let userData = request.input(["username"]);
    userData = userData.trim();
    try {
      const isFound = await User.findByOrFail('username', userData);
      if (!isFound) {
        const new_user = await User.create({
          username: userData
        });
        const token = await auth.generate(new_user, { jwtPayload: true })
        return response.json({
          status: 'success',
          message: 'New user created successfully',
          data: new_user,
          session_token: token,
        })
      } else {
        response.json({
          status: 'failure',
          message: `User with username: ${userData} already exists`,
          data: {},
        })
      }
    } catch (error) {
      return response.status(400).json({
        status: "error",
        message:
          "There was a problem creating the user, please try again later."
      });
    }
  }
  async login({ request, auth, response }) {
    try {
      // await auth.attempt(request.input("email"), request.input("password"));
      const isFound = await User.findBy('username', request.input('username'))
      if (!isFound.user) {
        return response.json({
          status: 'failure',
          message: 'User doesn\'t exists. Please register',
          data: {},
        })
      }
      let user = isFound.user;
      // generate token
      let token = await auth.generate(user, { jwtPayload: true})
      return response.json({
        status: "success",
        message: 'Log in successful',
        data: user,
        session_token: token
      });
    } catch (error) {
      response.status(400).json({
        status: "error",
        message: error.message
      });
    }
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
