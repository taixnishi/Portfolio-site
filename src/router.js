import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home.vue";
import Works from "./components/Works.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";

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