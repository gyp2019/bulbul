import api from '@/api';
import {
  REQUEST_LIST__TOCHELIN_GUIDE,
  RECEIVE_LIST__TOCHELIN_GUIDE,
  FAILURE_LIST__TOCHELIN_GUIDE,
} from '@/store/mutation-types';
import filters from './tochelinGuideFilters';
import _ from 'underscore';

const state = {
  list: [],
  loading: false,
  error: {},
};

const getters = {
  filteredList(state, getters) {
    return _.filter(state.list, (el) => {
      return _.every(getters['filters/checkedFilters'], (values, key) => !values.length || values.includes(el[key]));
    });
  },
};

const mutations = {
  [REQUEST_LIST__TOCHELIN_GUIDE] (state) {
    state.loading = true;
  },
  [RECEIVE_LIST__TOCHELIN_GUIDE] (state, data) {
    state.list = [ ...data ];
    state.loading = false;
  },
  [FAILURE_LIST__TOCHELIN_GUIDE] (state, error) {
    state.error = { ...error };
    state.loading = false;
  },
};

const actions = {
  requestList({ state, commit }) {
    if (state.list.length) {
      return;
    }

    commit(REQUEST_LIST__TOCHELIN_GUIDE);
    api.get('/tochelin.json').then(
      response => commit(RECEIVE_LIST__TOCHELIN_GUIDE, response.data),
      error => commit(FAILURE_LIST__TOCHELIN_GUIDE, error.response.data),
    );
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    filters,
  },
};
