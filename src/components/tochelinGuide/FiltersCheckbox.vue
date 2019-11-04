<template>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">{{ legend }}</legend>
      <div class="col-sm-10">
        <div
          class="form-check form-check-inline"
          v-for="(filter, index) in filters"
          :key="index"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="`${name}-${index}`"
            :checked="filter.checked"
            @change="$emit('input-checkbox', {
              name,
              key: filter.key,
              checked: $event.target.checked
            })"
          >
          <label
            class="form-check-label"
            :for="`${name}-${index}`"
          >{{ filter.label }}</label>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'GuideFilterCheckbox',
  props: {
    legend: {
      type: String,
      required: true,
    },
    name: {
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
