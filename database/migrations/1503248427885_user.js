"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      table
        .string("email")
        .nullable()
        .unique();
      table.string("password", 60).notNullable();
      table.string("name").nullable();
      table
        .string("username")
        .nullable()
        .unique();
      table.string("avatar").nullable();
      table.string("gender").nullable();
      table.string("location").nullable();
      table.string("website").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
