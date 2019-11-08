<template>
  <table class="table">
    <thead>
      <tr>
        <th>{{names.toTitle}}</th>
        <th>{{names.membership}}</th>
        <th>{{names.magnet}}</th>
        <th>{{names.nonCommercial}}</th>
        <th>{{names.adultContents}}</th>
        <th>{{names.rookie}}</th>
        <th>{{names.status}}</th>
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
    names: {
      type: Object,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>
