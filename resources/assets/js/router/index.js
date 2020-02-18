import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/pages/Index";

import AppInit from "./guards/AppInit";
import IsLoggedIn from "./guards/IsLoggedIn";

Vue.use(Router);

const router = new Router({
  mode: "history", // use HTML5 history instead of hashes
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    // {
    //   path: "/admin",
    //   component: Admin,
    //   beforeEnter: IsLoggedIn,
    //   meta: {
    //     isAdmin: true
    //   }
    // }
  ]
});

// router.beforeEach(AppInit);

export default router;
