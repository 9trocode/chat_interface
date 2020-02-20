import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/pages/Index";
import Chat from "@/components/pages/Chat";

import IsLoggedIn from "./guards/IsLoggedIn";
import AuthInit from "./guards/AuthInit";

Vue.use(Router);

const router = new Router({
    mode: "history", // use HTML5 history instead of hashes
    routes: [{
            path: "/",
            name: "Index",
            beforeEnter: AuthInit,
            component: Index
        },
        {
            path: "/chat",
            name: "Chat",
            beforeEnter: IsLoggedIn,
            component: Chat
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


export default router;
