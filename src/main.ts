import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";

import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
const app = createApp(App);
app
  .use(createPinia())
  .use(router)
  .use(ElementPlus)
  .mount("#app");
