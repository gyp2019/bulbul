<template>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">{{ legend }}</legend>
      <div class="col-sm-9">
        <div
          class="form-check form-check-inline"
          v-for="(filter, index) in filters"
          :key="index"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="`${id}-${index}`"
            :checked="filter.checked"
            @change="$emit('set-filter', {
              id,
              key: filter.key,
              checked: $event.target.checked
            })"
          >
          <label
            class="form-check-label"
            :for="`${id}-${index}`"
          >{{ filter.label }}</label>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'GuideFilterCheckboxs',
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
