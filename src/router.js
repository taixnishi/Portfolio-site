import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import Works from "./pages/Works.vue";
import Contact from "./pages/Contact.vue";
import About from "./pages/About.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/works",
            component: Works
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/contact",
            component: Contact
        },
    ]
})