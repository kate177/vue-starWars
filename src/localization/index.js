import en from "./langs/en.json";
import ru from "./langs/ru.json";
import zh from "./langs/zh.json";
import { createI18n } from "vue-i18n/index";

const i18n = createI18n({
  locale: "en",
  messages: {
    en,
    ru,
    zh,
  },
});
export default i18n;
