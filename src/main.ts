import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// @ts-ignore
import SvgIcon from "vue3-icon";

import "./assets/main.css";

const app = createApp(App);

app.component('svg-icon', SvgIcon);

app.use(router);

app.mount("#app");
