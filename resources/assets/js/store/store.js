import Vue from "vue";
import Vuex from "vuex";

/*----------  Modules  ----------*/
// import feedback from "./modules/feedback";
// import loading from "./modules/loading";
// import posts from "./modules/posts";
// import users from "./modules/users";
import auth from "./modules/http";
import WS from "./modules/web-socket";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    WS
  }
});
