'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessagesSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments();
      table.string('message').notNullable().unique();
      table.integer('media_id').unsigned().references('id').inTable('media');
      table.integer('channel_id').unsigned().references('id').inTable('channels');
      table.integer('sender_id').unsigned().references('id').inTable('users');
      table.integer('receiver_id').unsigned().references('id').inTable('users');
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessagesSchema
