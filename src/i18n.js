import { createI18n } from "vue-i18n/index";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      people: "People",
      planets: "Planets",
      starships: "Starships",
    },
    ru: {
      people: "Люди",
      planets: "Планеты",
      starships: "Звездолеты",
    },
    zh: {
      people: "人们",
      planets: "行星",
      starships: "星舰",
    },
  },
});
export default i18n;
