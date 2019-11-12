<template>
  <div class="row">
    <div class="col-md-4" v-for="(item, index) in list" :key="index">
      <div class="card mb-4">
        <img :src="item.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ item.toTitle }}</h5>
          <p class="card-text"><PillBadges :item="item"/></p>
          <a :href="item.toLink" target="_blank" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PillBadges from './PillBadges.vue';

export default {
  name: 'TochelinGuideCard',
  components: {
    PillBadges,
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
</style>
