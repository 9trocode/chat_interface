'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class JoinedChannel extends Model {
  static boot () {
    super.boot();
  }
  users() {
    return this.hasMany('App/Models/User')
  }
}

module.exports = JoinedChannel
