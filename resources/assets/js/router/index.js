import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/pages/Index";
import About from "@/components/pages/About";
import Register from "@/components/pages/Register";
import Login from "@/components/pages/Login";
import Admin from "@/components/pages/Admin";

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
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/admin",
      component: Admin,
      beforeEnter: IsLoggedIn,
      meta: {
        isAdmin: true
      }
    }
  ]
});

router.beforeEach(AppInit);

export default router;
