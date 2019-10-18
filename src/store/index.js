import Vue from 'vue';
import Vuex from 'vuex';

import yachelinGuide from './modules/yachelinGuide';
import bochelinGuide from './modules/bochelinGuide';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    yachelinGuide,
    bochelinGuide,
  },
});
