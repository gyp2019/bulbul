<template>
  <div class="container">
    ya
    <table class="table">
      <thead>
        <tr>
          <th>토렌트</th>
          <th>회원제</th>
          <th>자석</th>
          <th>광고</th>
          <th>성인</th>
          <th>신규</th>
        </tr>
      </thead>
      <template v-for="(item, index) in list">
        <tr :key="index">
          <td>{{ item.toTitle }}</td>
          <td>{{ item.membership ? '회원제' : '비회원제' }}</td>
          <td>{{ item.magnet ? '자석O': '자석X' }}</td>
          <td>{{ item.nonCommercial ? '광고X' : '광고O' }}</td>
          <td>{{ item.adultContents ? '성인X' : '성인O' }}</td>
          <td>{{ item.rookie ? '신규' : '기존' }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TochelinGuide',
  computed: {
    ...mapState('tochelinGuide', [
      'list',
    ]),
  },
  methods: {
    ...mapActions('tochelinGuide', [
      'requestList',
    ]),
  },
  mounted() {
    this.requestList();
  },
};
</script>
