import { createApp } from "vue";
import { createPinia } from "pinia";
import dotenv from "dotenv";
import VueCookies from "vue3-cookies";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css"

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(dotenv)
app.use(VueCookies)

app.mount("#app");
