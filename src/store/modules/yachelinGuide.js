import api from '@/api';
import {
  REQUEST_LIST__YACHELIN_GUIDE,
  RECEIVE_LIST__YACHELIN_GUIDE,
  FAILURE_LIST__YACHELIN_GUIDE,
} from '@/store/mutation-types';

const state = {
  list: [],
  loading: false,
  error: {},
};

const getters = {
};

const mutations = {
  [REQUEST_LIST__YACHELIN_GUIDE] (state) {
    state.loading = true;
  },
  [RECEIVE_LIST__YACHELIN_GUIDE] (state, data) {
    state.list = [ ...data ];
    state.loading = false;
  },
  [FAILURE_LIST__YACHELIN_GUIDE] (state, error) {
    state.error = { ...error };
    state.loading = false;
  },
};

const actions = {
  requestList({ state, commit }) {
    if (state.list.length) {
      return;
    }

    commit(REQUEST_LIST__YACHELIN_GUIDE);
    api.get('/ya-assistant.json').then(
      response => commit(RECEIVE_LIST__YACHELIN_GUIDE, response.data),
      error => commit(FAILURE_LIST__YACHELIN_GUIDE, error.response.data),
    );
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
