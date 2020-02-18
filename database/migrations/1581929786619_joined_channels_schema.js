'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JoinedChannelsSchema extends Schema {
  up () {
    this.create('joined_channels', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('channel_id').unsigned().references('id').inTable('channels');
      table.timestamps();
    })
  }

  down () {
    this.drop('joined_channels')
  }
}

module.exports = JoinedChannelsSchema;
