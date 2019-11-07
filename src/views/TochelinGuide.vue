<template>
  <div class="container">
    <TochelinGuideFilters/>
    <TochelinGuideTable :list="filteredList"/>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import TochelinGuideFilters from './TochelinGuideFilters.vue';
import TochelinGuideTable from '@/components/tochelinGuide/TochelinGuideTable.vue';

export default {
  name: 'TochelinGuide',
  components: {
    TochelinGuideFilters,
    TochelinGuideTable,
  },
  computed: {
    ...mapState('tochelinGuide', [
      'list',
    ]),
    ...mapGetters('tochelinGuide', [
      'filteredList',
    ]),
  },
  methods: {
    ...mapActions('tochelinGuide', [
      'requestList',
    ]),
  },
  mounted() {
    this.requestList();
  },
};
</script>
