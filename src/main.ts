import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// @ts-ignore
import SvgIcon from "vue3-icon";

import '@fontsource/sarabun/100.css';
import '@fontsource/sarabun/200.css';
import '@fontsource/sarabun/300.css';
import '@fontsource/sarabun/400.css';
import '@fontsource/sarabun/500.css';
import '@fontsource/sarabun/600.css';
import '@fontsource/sarabun/700.css';
import '@fontsource/sarabun/800.css';

import "./assets/main.css";

const app = createApp(App);

app.component('svg-icon', SvgIcon);

app.use(router);

app.mount("#app");
