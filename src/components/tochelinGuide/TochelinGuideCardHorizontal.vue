<template>
  <div class="row">
    <div class="col-12" v-for="(item, index) in list" :key="index">
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="item.image" class="card-img" alt="...">
      <div class="card-img-overlay bg-gradient-dark"></div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ item.toTitle }}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<script>
// import PillBadges from './PillBadges.vue';

export default {
  name: 'TochelinGuideCardHorizontal',
  components: {
    // PillBadges,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.bg-gradient-dark {
  background-image: linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.3));
}
</style>
