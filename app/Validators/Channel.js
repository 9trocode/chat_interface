'use strict'
const BaseValidator = require('./Base');

class Channel extends BaseValidator {
  get rules () {
    return {
      // validation rules
      channel_name: 'required',
      topic: 'required'
    }
  }
}

module.exports = Channel
