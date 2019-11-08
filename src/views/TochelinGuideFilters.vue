<template>
  <div class="my-4">
    <button
      class="btn btn-outline-secondary btn-lg btn-block rounded-0 text-left"
      @click="toggleFiltersBox"
    >
      Filter {{ openedFiltersBox ? '&#x025B3;' : '&#x025BD;' }}
    </button>
    <div v-if="openedFiltersBox" class="p-3">
      <!-- <FiltersCheckbox
        id="membership"
        :legend="membership.name"
        :filters="membership.filters"
        @input-checkbox="setFilter"
      /> -->
      <FiltersButtons
        id="magnet"
        :legend="magnet.name"
        :filters="magnet.filters"
        @set-filter="setFilter"
      />
      <FiltersButtons
        id="nonCommercial"
        :legend="nonCommercial.name"
        :filters="nonCommercial.filters"
        @set-filter="setFilter"
      />
      <FiltersButtons
        id="status"
        :legend="status.name"
        :filters="status.filters"
        @set-filter="setFilter"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { SET_FILTER__TOCHELIN_GUIDE_FILTERS } from '@/store/mutation-types';
// import FiltersCheckboxs from '@/components/tochelinGuide/FiltersCheckboxs.vue';
import FiltersButtons from '@/components/tochelinGuide/FiltersButtons.vue';

export default {
  name: 'TochelinGuideFilters',
  components: {
    // FiltersCheckboxs,
    FiltersButtons,
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
      'adultContents',
      'rookie',
      'status',
    ]),
  },
  methods: {
    ...mapMutations('tochelinGuide/filters', {
      'setFilter': SET_FILTER__TOCHELIN_GUIDE_FILTERS,
    }),
    toggleFiltersBox() {
      this.openedFiltersBox = !this.openedFiltersBox;
    },
  },
};
</script>
