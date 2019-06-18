import Vue from "vue";
import VueI18n from "vue-i18n";

import en from "@/lang/en.json";
import fr from "@/lang/fr.json";
import dz from "@/lang/dz.json";

Vue.use(VueI18n);

const messages = {
  en,
  fr,
  dz
};

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "fr", // set fallback locale
  messages // set locale messages
});

export default i18n;
