<template>
  <div class="my-4">
    <button
      class="btn btn-outline-primary btn-lg btn-block rounded-0 text-left"
      @click="toggleBox"
    >
      Filter {{ openedBox ? '&#x025B3;' : '&#x025BD;' }}
    </button>

    <div v-if="openedBox" class="px-3">
      <GuideFilterCheckbox
        :legend="운영방식"
        :group="filters[0].group"
        :value="[]"
      />
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
