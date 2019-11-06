<template>
  <div class="my-4">
    <button
      class="btn btn-outline-secondary btn-lg btn-block rounded-0 text-left"
      @click="toggleFiltersBox"
    >
      Filter {{ openedFiltersBox ? '&#x025B3;' : '&#x025BD;' }}
    </button>
    <div v-if="openedFiltersBox" class="p-3">
      <FiltersCheckbox
        legend="회원방식"
        name="membership"
        :filters="membership"
        @input-checkbox="toggleFilter"
      />
      <FiltersCheckbox
        legend="자석포함"
        name="magnet"
        :filters="magnet"
        @input-checkbox="toggleFilter"
      />
      <FiltersCheckbox
        legend="광고포함"
        name="nonCommercial"
        :filters="nonCommercial"
        @input-checkbox="toggleFilter"
      />
      <FiltersCheckbox
        legend="운영상태"
        name="status"
        :filters="status"
        @input-checkbox="toggleFilter"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { TOGGLE_FILTER__TOCHELIN_GUIDE_FILTERS } from '@/store/mutation-types';
import FiltersCheckbox from '@/components/tochelinGuide/FiltersCheckbox.vue';

export default {
  name: 'TochelinGuideFilters',
  components: {
    FiltersCheckbox,
  },
  data() {
    return {
      openedFiltersBox: false,
    };
  },
  computed: {
    ...mapState('tochelinGuide/filters', [
      'membership',
      'magnet',
      'nonCommercial',
      'status',
    ]),
  },
  methods: {
    ...mapMutations('tochelinGuide/filters', {
      'toggleFilter': TOGGLE_FILTER__TOCHELIN_GUIDE_FILTERS,
    }),
    toggleFiltersBox() {
      this.openedFiltersBox = !this.openedFiltersBox;
    },
  },
};
</script>
