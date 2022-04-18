import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/main.scss";
import "./assets/scss/light.scss";
import "./assets/scss/dark.scss";
import i18n from "./i18n";
import FlagIcon from "vue-flag-icon";

createApp(App).use(i18n).use(FlagIcon).use(router).mount("#app");
