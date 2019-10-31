<template>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
      <div class="col-sm-10">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="gridRadios1" value="option1">
          <label class="form-check-label" for="gridRadios1">First radio</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">Second radio</label>
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
    group: {
      type: Array,
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
  },
};
</script>
