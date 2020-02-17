'use strict'

/*
|--------------------------------------------------------------------------
| ChannelSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ChannelSeeder {
  async run () {
    await Factory.get('channels').create()
  }
}

module.exports = ChannelSeeder
