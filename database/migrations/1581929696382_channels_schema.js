'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChannelsSchema extends Schema {
  up () {
    this.create('channels', (table) => {
      table.increments();
      table.string('channel_name', 80).notNullable().unique();
      table.string('topic', 254).notNullable().unique();
      table.timestamps()
    })
  }

  down () {
    this.drop('channels')
  }
}

module.exports = ChannelsSchema
