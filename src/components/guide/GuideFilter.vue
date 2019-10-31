<template>
  <div class="my-4">
    <button
      class="btn btn-outline-primary btn-lg btn-block rounded-0 text-left"
      @click="toggleBox"
    >
      Filter {{ openedBox ? '&#x025B3;' : '&#x025BD;' }}
    </button>

    <div v-if="openedBox" class="px-3">
      <GuideFilterCheckbox/>
    </div>
  </div>
</template>

<script>
import GuideFilterCheckbox from './GuideFilterCheckbox.vue';

export default {
  name: 'GuideFilter',
  components: {
    GuideFilterCheckbox,
  },
  data() {
    return {
      filters: [
        {
          legend: '운영방식',
          group: [
            { label: '비회원제', value: 'false' },
            { label: '회원제', value: 'true' },
          ],
        },
        {
          legend: '자석',
          group: [
            { label: '자석없음', value: 'false' },
            { label: '자석포함', value: 'true' },
          ],
        },
      ],
      openedBox: false,
    };
  },
  methods: {
    toggleBox() {
      this.openedBox = !this.openedBox;
    },
  },
};
</script>

<style scoped>
.icon {
  width: .75rem;
}
</style>
