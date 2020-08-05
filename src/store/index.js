import Vue from "vue";
import Vuex from "vuex";

import state from "./state.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

import main from "./modules/main/index.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main
  },
  namespaced: true,
  state,
  mutations,
  actions
});
