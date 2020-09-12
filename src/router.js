import Vue from "vue";
import Router from "vue-router";
import VuePageTransition from "vue-page-transition";

import Home from "./pages/Home.vue";
import Works from "./pages/Works.vue";
import Contact from "./pages/Contact.vue";
import About from "./pages/About.vue";

Vue.use(Router);
Vue.use(VuePageTransition);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home,
            meta: { transition: 'fade' },
        },
        {
            path: "/works",
            component: Works,
            meta: { transition: 'fade-in-left' },
        },
        {
            path: "/about",
            component: About,
            meta: { transition: 'fade-in-down' },
        },
        {
            path: "/contact",
            component: Contact,
            meta: { transition: 'fade-in-right' },
        },
        {
            path: "*",
            redirect: "/"
        }
    ]
})