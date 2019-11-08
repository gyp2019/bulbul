import {
  SET_FILTER__TOCHELIN_GUIDE_FILTERS,
} from '@/store/mutation-types';
import _ from 'underscore';

const FiltersMap = {
  toTitle: {
    name: '토렌트',
  },
  membership: {
    name: '회원방식',
    filters: [
      { checked: false, key: false, label: '비회원제' },
      { checked: false, key: true, label: '회원제' },
    ],
  },
  magnet: {
    name: '마그넷',
    filters: [
      { checked: false, key: false, label: '자석없음' },
      { checked: false, key: true, label: '자석포함' },
    ],
  },
  nonCommercial: {
    name: '광고',
    filters: [
      { checked: false, key: false, label: '광고포함' },
      { checked: false, key: true, label: '광고없음' },
    ],
  },
  adultContents: {
    name: '성인',
    filters: [
      { checked: false, key: false, label: '성인X' },
      { checked: false, key: true, label: '성인O' },
    ],
  },
  rookie: {
    name: '신규',
    filters: [
      { checked: false, key: false, label: '기존' },
      { checked: false, key: true, label: '신규' },
    ],
  },
  status: {
    name: '운영상태',
    filters: [
      { checked: false, key: 'stop', label: '정지' },
      { checked: false, key: 'pause', label: '일시정지' },
      { checked: false, key: 'run', label: '운영' },
    ],
  },
};

const state = {
  ...FiltersMap,
};

const getters = {
  // ['토렌트', '회원방식', '마그넷', ...]
  namesFilter(state) {
    return _.pluck(state, 'name');
  },
  namedFiltes(state) {
    return _.mapObject(state, (group) => group.name);
  },
  // {
  //   membership: [],
  //   magnet: [false],
  //   nonCommercial: [true],
  //   adultContents: [false, true],
  //   rookie: [],
  //   status: ['stop', 'pause', 'run'],
  // }
  checkedFilters(state) {
    const groups = _.omit(state, 'toTitle');
    return _.mapObject(groups, (group) => {
      return _.pluck(_.where(group.filters, {checked: true}), 'key');
    });
  },
};

const mutations = {
  [SET_FILTER__TOCHELIN_GUIDE_FILTERS] (state, { id, key, checked }) {
    const filter = _.find(state[id].filters, (el) => key === el.key);
    filter.checked = checked;
  },
};

const actions = {};

export {
  FiltersMap
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
