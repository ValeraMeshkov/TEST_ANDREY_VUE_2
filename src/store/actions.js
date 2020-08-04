import axios from "axios";
import lang_en from "@/locales/en.json";
import lang_ru from "@/locales/ru.json";

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
    if (value === 'en') context.commit("setChangeLang", lang_en);
    if (value === 'ru') context.commit("setChangeLang", lang_ru);
  }
};
