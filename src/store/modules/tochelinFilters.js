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
  filters(state) {
    return _.map(state.filters, (group, key) => {
      return { [key]: _.pluck(_.where(group, {checked: true}), 'key') };
    });
  },
  filtering(state, getters) {
    return _.filter(state.list, (el) => {
      return _.every(getters.filters, (values, key) => !values.length || values.includes(el[key]));
    });
  },

};

const mutations = {
  // [TOGGLE_FILTER__TOCHELIN_FILTER] (state, { key, code, checked }) {
  //   state.filters[key][code] = checked;
  // },
  [TOGGLE_FILTER__TOCHELIN_FILTER] (state, { code, key, checked }) {
    const filter = _.find(state.filters[code], (el) => key === el.key);
    filter.checked = checked;
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
