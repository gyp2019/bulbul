<template>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">{{ legend }}</legend>
      <div class="col-sm-9">
        <button
          v-for="(filter, index) in filters"
          :key="index"
          class="btn btn-sm rounded-pill mr-3"
          :class="[filter.checked ? 'btn-primary' : 'btn-outline-primary']"
          @click="$emit('set-filter', {
            id,
            key: filter.key,
            checked: !filter.checked,
          })"
        >{{ filter.label }}</button>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'GuideFilterButtons',
  props: {
    legend: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    filters: {
      type: Array,
      required: true,
    },
  },
};
</script>
