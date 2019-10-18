<template>
  <div class="container">
    ya
    <table class="table">
      <thead>
        <tr>
          <th>토렌트명</th>
          <th>사이트주소</th>
          <th>야슐랭</th>
          <th>특징</th>
          <th>언어</th>
          <th>회원제</th>
        </tr>
      </thead>
      <template v-for="({ name, siteUrl, bochelinGuide, features, languages, membership }, index) in list">
        <tr :key="index">
          <td>{{ name }}</td>
          <td>{{ siteUrl }}</td>
          <td>{{ bochelinGuide }}</td>
          <td>{{ features }}</td>
          <td>{{ languages }}</td>
          <td>{{ membership ? '회원제' : '비회원' }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'yachelinGuide',
  computed: {
    ...mapState('yachelinGuide', [
      'list',
    ]),
  },
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
