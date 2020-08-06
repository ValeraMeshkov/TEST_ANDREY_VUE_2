import axios from "axios";
import lang_eng from "@/locales/en.json";
import lang_blr from "@/locales/blr.json";
import lang_ru from "@/locales/ru.json";
import lang_fr from "@/locales/fr.json";
import lang_de from "@/locales/de.json";
import lang_ch from "@/locales/ch.json";

const URL = "http://localhost:3000";

export default {
  async getColors (context) {
    const res = await axios.get(`${URL}/colors`);
    context.commit("setColors", res.data);
  },
  /**
   * Изменение Ширины экрана
   * @param {Object} commit - store
   * @param {Number} value - ширина экрана
   */
  changeWindowWidth (context, value) {
    context.commit("setWindowWidth", value);
  },
  /**
   * Изменение Ширины экрана
   * @param {Object} commit - store
   * @param {Number} value - ширина экрана
   */
  changeLang (context, value) {
    if (value === 'eng') context.commit("setChangeLang", lang_ru);
    else if (value === 'ru') context.commit("setChangeLang", lang_blr);
    else if (value === 'blr') context.commit("setChangeLang", lang_fr);
    else if (value === 'fr') context.commit("setChangeLang", lang_de);
    else if (value === 'de') context.commit("setChangeLang", lang_ch);
    else if (value === 'ch') context.commit("setChangeLang", lang_eng);
  }
};
