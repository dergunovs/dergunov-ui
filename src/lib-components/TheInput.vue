<template>
  <input :type="type" class="ui-input" :class="[`ui-input-fit-${fit}`]" @input="$emit('input', $event.target.value)" />
</template>

<script>
  export default {
    name: "TheInput",

    props: {
      type: { type: String, default: "text" },
      fit: { type: String, default: "regular" },
    },
  };
</script>

<style>
  .ui-input {
    border: 1px solid var(--color-gray);
    outline: none !important;
    border-radius: 4px;
    padding: 4px 8px;
    height: 36px;
    transition-duration: 300ms;
  }
  .ui-input:focus {
    border: 1px solid var(--color-gray-dark);
  }
  .ui-input-fit-grow {
    width: 100%;
  }
</style>
