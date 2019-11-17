<template>
  <div>
    <span
      v-if="item.membership"
      class="badge badge-pill badge-primary mr-2"
    >회원제</span>
    <span
      v-if="item.magnet"
      class="badge badge-pill badge-secondary mr-2"
    >자석포함 <img src="./icons/icons8-magnet-32.png" class="icons"></span>
    <span
      v-if="item.nonCommercial"
      class="badge badge-pill badge-success mr-2"
    >광고없음 <img src="./icons/icons8-ad-blocker-32.png" class="icons"></span>
    <span
      v-if="item.adultContents"
      class="badge badge-pill badge-danger mr-2"
    >성인컨텐츠 <img src="./icons/icons8-18-plus-50.png" class="icons"></span>
    <span
      v-if="item.rookie"
      class="badge badge-pill badge-warning mr-2"
    >신규 <img src="./icons/icons8-new-24.png" class="icons"></span>
    <span
      class="badge badge-pill badge-info mr-2"
    >상태: {{ item.status | tochelinStatus }}</span>
    <span class="badge badge-pill badge-light">Light</span>
  </div>
</template>

<script>
export default {
  name: 'PhilBages',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.icons {
  height: 1.5rem;
}
</style>
