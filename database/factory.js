'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('users', (faker) => {
  return {
    username: faker.username()
  }
});
Factory.blueprint('channels', (faker) => {
  return {
    channel_name: 'general',
    topic: 'general channel'
  }
})
