<template>
  <label class="ui-field-label-block">
    <div class="ui-field-label">{{ label }}</div>
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name: "TheField",

    props: {
      label: { type: String },
    },
  };
</script>

<style>
  .ui-field-label-block {
    display: flex;
    flex-direction: column;
  }
  .ui-field-label {
    margin-bottom: 2px;
  }
</style>
