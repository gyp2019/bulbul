import Vue from 'vue';
import Vuex from 'vuex';

import tochelinGuide from './modules/tochelinGuide';
import tochelinGuideFiltersMap from './modules/tochelinGuideFiltersMap';
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
    tochelinGuide,
    tochelinGuideFiltersMap,
    yachelinGuide,
    bochelinGuide,
  },
});
