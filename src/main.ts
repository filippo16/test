import { createApp } from "vue";
import { createRouter, createWebHistory, Router } from "vue-router";
import App from "./App.vue";
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

import Home from "./pages/Home.vue"
import Formazione from "./pages/Formazione.vue";

const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: Home },
      { path: "/formazione", component: Formazione },
    ],
});


createApp(App).use(router).mount("#app");
