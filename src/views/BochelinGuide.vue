<template>
  <div class="container">
    ya
    <div class="row">
      <template v-for="({ nameJp }, index) in list">
        <div class="col-3" :key="index">
          {{ nameJp }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'bochelinGuide',
  computed: {
    ...mapState('bochelinGuide', [
      'list',
    ]),
  },
  methods: {
    ...mapActions('bochelinGuide', [
      'requestList',
    ]),
  },
  mounted() {
    this.requestList();
  },
};
</script>
