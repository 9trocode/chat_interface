"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("/authenticate", "UserController.authenticate").prefix("api").validator('User');
Route.get('/join', 'ChannelController.joinChannel').prefix('api').validator('Channel').middleware(['auth']);
Route.get('/my_channels', 'ChannelController.getChannelUsers').prefix('api');


// just forward to the client. This has to be the last route
Route.any("*", ({ view }) => view.render("app"));
