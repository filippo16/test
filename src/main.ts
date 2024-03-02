import { createApp } from "vue";
import { createRouter, createWebHistory, Router } from "vue-router";
import App from "./App.vue";
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

import Home from "./pages/Home.vue"
import Formazione from "./pages/Formazione.vue";
import Listone from "./pages/Listone.vue";

const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: Home },
      { path: "/formazione", component: Formazione },
      { path: "/listone", component: Listone },
    ],
});


createApp(App).use(router).mount("#app");
