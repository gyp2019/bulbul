<template>
  <div class="container">
    ya
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'yachelinGuide',
  methods: {
    ...mapActions('yachelinGuide', [
      'requestList',
    ]),
  },
  mounted() {
    this.requestList();
  },
};
</script>
