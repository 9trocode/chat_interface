import Vue from "vue";
import Vuex from "vuex";

/*----------  Modules  ----------*/
// import feedback from "./modules/feedback";
// import loading from "./modules/loading";
// import posts from "./modules/posts";
// import users from "./modules/users";
import auth from "./modules/http";
import WS from "./modules/web-socket";
import uploads from "./modules/uploads";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    WS,
    uploads,
  }
});
