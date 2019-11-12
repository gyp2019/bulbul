<template>
  <div class="container">
    <TochelinGuideFilters/>
    <!-- <TochelinGuideTable :names="namedFiltes" :list="filteredList"/> -->
    <TochelinGuideRows :names="namedFiltes" :list="filteredList"/>
    <!-- <TochelinGuideMedia :list="filteredList"/> -->
    <!-- <TochelinGuideCard :list="filteredList"/> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import TochelinGuideFilters from './TochelinGuideFilters.vue';
// import TochelinGuideTable from '@/components/tochelinGuide/TochelinGuideTable.vue';
import TochelinGuideRows from '@/components/tochelinGuide/TochelinGuideRows.vue';
// import TochelinGuideMedia from '@/components/tochelinGuide/TochelinGuideMedia.vue';
// import TochelinGuideCard from '@/components/tochelinGuide/TochelinGuideCard.vue';

export default {
  name: 'TochelinGuide',
  components: {
    TochelinGuideFilters,
    // TochelinGuideTable,
    TochelinGuideRows,
    // TochelinGuideMedia,
    // TochelinGuideCard,
  },
  computed: {
    ...mapState('tochelinGuide', [
      'list',
    ]),
    ...mapGetters('tochelinGuide', [
      'filteredList',
    ]),
    ...mapGetters('tochelinGuide/filters', [
      'namedFiltes',
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
