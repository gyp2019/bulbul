<template>
  <div class="">
    <div class="row no-gutters border-top py-3" v-for="(item, index) in list" :key="index">
      <div class="col-12 col-md-3 h4 mb-md-0">{{ item.toTitle }}</div>
      <div class="col-12 col-md-9">
        <div class="row">
          <div class="col-4 col-md-2 pt-1">{{ item.membership ? '회원제' : '비회원제' }}</div>
          <div class="col-4 col-md-2 pt-1">{{ item.magnet ? '자석O': '자석X' }}</div>
          <div class="col-4 col-md-2 pt-1">{{ item.nonCommercial ? '광고X' : '광고O' }}</div>
          <div class="col-4 col-md-2 pt-1">{{ item.adultContents ? '성인X' : '성인O' }}</div>
          <div class="col-4 col-md-2 pt-1">{{ item.rookie ? '신규' : '기존' }}</div>
          <div class="col-4 col-md-2 pt-1">{{ item.status | status }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TochelinGuideRows',
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
