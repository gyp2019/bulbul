<template>
  <ul class="list-unstyled">
    <li class="media" v-for="(item, index) in list" :key="index">
      <img :src="item.image" class="media-image mr-3" alt="...">
      <div class="media-body">
        <h5 class="mt-0 mb-1">{{ item.toTitle }}</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TochelinGuideMedia',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.media-image {
  width: 15rem;
}
</style>
