"use strict";

const User = use("App/Models/User");

class UserController {
  async register({ request, response }) {
    const userData = request.only(["email", "password", "username"]);
    try {
      const user = await User.create(userData);
      return response.json({
        status: "success",
        data: user
      });
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
      await auth.attempt(request.input("email"), request.input("password"));
      return response.json({
        status: "success",
        data: auth.user
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
