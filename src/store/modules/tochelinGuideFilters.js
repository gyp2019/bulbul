import {
  TOGGLE_FILTER__TOCHELIN_GUIDE_FILTERS,
} from '@/store/mutation-types';
import _ from 'underscore';


const state = {
  membership: [
    { checked: true, key: false, label: '비회원제' },
    { checked: true, key: true, label: '회원제' },
  ],
  magnet: [
    { checked: false, key: false, label: '자석없음' },
    { checked: false, key: true, label: '자석포함' },
  ],
  status: [
    { checked: false, key: 'stop', label: '정지' },
    { checked: false, key: 'pause', label: '일시정지' },
    { checked: false, key: 'run', label: '운영' },
  ],
};

const getters = {
  checkedfilters(state) {
    return _.mapObject(state, (array) => {
      return _.pluck(_.where(array, {checked: true}), 'key');
    });
  },
};

const mutations = {
  [TOGGLE_FILTER__TOCHELIN_GUIDE_FILTERS] (state, { name, key, checked }) {
    const filter = _.find(state[name], (el) => key === el.key);
    filter.checked = checked;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
