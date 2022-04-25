import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/main.scss";
import "./assets/scss/light.scss";
import "./assets/scss/dark.scss";
import i18n from "./localization/index.js";

createApp(App).use(i18n).use(router).mount("#app");
