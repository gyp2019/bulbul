<template>
  <div>
    TochelinGuideFilters
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
      legend="운영상태"
      name="status"
      :filters="status"
      @input-checkbox="toggleFilter"
    />
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
  computed: {
    ...mapState('tochelinGuide/filters', [
      'membership',
      'magnet',
      'status',
    ]),
  },
  methods: {
    ...mapMutations('tochelinGuide/filters', {
      'toggleFilter': TOGGLE_FILTER__TOCHELIN_GUIDE_FILTERS,
    }),
  },
};
</script>
