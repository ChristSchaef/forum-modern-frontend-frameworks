import { createApp } from "vue";
import { routes } from "./router.ts";
import "./style.css";
import App from "./App.vue";
import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
