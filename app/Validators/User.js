'use strict';
const BaseValidator = require('./Base');


class User extends BaseValidator{
  get rules () {
    return {
      // validation rules
      username: `required`,
    }
  }
}

module.exports = User;
