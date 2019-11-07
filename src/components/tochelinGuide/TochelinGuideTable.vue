<template>
  <table class="table">
    <thead>
      <tr>
        <th>토렌트</th>
        <th>회원방식</th>
        <th>자석</th>
        <th>광고</th>
        <th>성인</th>
        <th>신규</th>
        <th>상태</th>
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
        <td>{{ item.status | status }}</td>
      </tr>
    </template>
  </table>
</template>

<script>
export default {
  name: 'TochelinGuideTable',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>
