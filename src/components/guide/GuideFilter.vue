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
        :legend="filters[0].legend"
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
      filters: {
        membership: [
          { checked: false, key: 'false', label: '비회원제' },
          { checked: false, key: 'true', label: '회원제' },
        ],
        magnetic: [
          { checked: false, key: 'false', label: '자석없음' },
          { checked: false, key: 'true', label: '자석포함' },
        ],
        nations: [
          { checked: false, key: 'scotch', label: '스카치' },
          { checked: false, key: 'irish', label: '아이리쉬' },
          { checked: false, key: 'canadian', label: '캐내디언' },
          { checked: false, key: 'american', label: '어메리칸' },
          { checked: false, key: 'japanese', label: '재팬니즈' },
        ],
      },
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
