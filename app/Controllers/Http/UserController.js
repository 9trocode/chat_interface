"use strict";

const User = use("App/Models/User");


class UserController {
  async authenticate({ request, response, auth }) {
    const { username } = request.post();
    const userData  = username.trim();
    try {
      const user = await User.findOrCreate(
        {username: userData}
        );
      let token = await auth.generate(user);
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
}

module.exports = UserController;
