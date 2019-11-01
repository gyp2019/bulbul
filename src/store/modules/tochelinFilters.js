import {
  TOGGLE_FILTER__TOCHELIN_FILTER,
} from '@/store/mutation-types';
import _ from 'underscore';

const state = {
  list: [],
  filters: {
    membersip: [
      { checked: true, key: 'false', label: '비회원제' },
      { checked: true, key: 'true', label: '회원제' },
    ],
    magnetic: [
      { checked: false, key: 'false', label: '자석없음' },
      { checked: false, key: 'true', label: '자석포함' },
    ],
    nation: [
      { checked: true, key: 'SCT', label: '스카치' },
      { checked: true, key: 'IRL', label: '아이리쉬' },
      { checked: false, key: 'CAN', label: '캐내디언' },
      { checked: false, key: 'USA', label: '어메리칸' },
      { checked: true, key: 'JPN', label: '재팬니즈' },
    ],
  },
};

const getters = {
  // filteredMembership(state) {
  //   const { list } = state;
  //   const { membersip } = state.filterArray;
  //   return _.filter(list, el => !membersip.length || membersip.includes(el.membersip));
  // },
  // filteredMagnetic() {
  //   const { list } = state;
  //   const { magnetic } = state.filterArray;
  //   return _.filter(list, el => !magnetic.length || magnetic.includes(el.magnetic));
  // },
  // filtered() {
  //   const { list, filterArray } = state;
  //   return _.filter(list, (el) => {
  //     return _.every(filterArray, (values, key) => !values.length || values.includes(el[key]));
  //   });
  // },
  /**
   * {
   *   membersip: ['false', 'true'],
   *   magnetic: [],
   *   nation: ['SCT', 'IRL', 'JPN'],
   * }
   */
  filteredNations(state) {
    return _.map(state.filters, (group, key) => {
      return {
        [key]: _.pluck(_.where(group, {checked: true}), 'key'),
      };
    });
  },
};

const mutations = {
  [TOGGLE_FILTER__TOCHELIN_FILTER] (state, { key, code, checked }) {
    state.filters[key][code] = checked;
  },
};

const actions = {
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
