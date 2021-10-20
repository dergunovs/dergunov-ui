<template>
  <textarea class="ui-textarea" @input="$emit('update:modelValue', $event.target.value)"></textarea>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "TheTextarea",
  });
</script>

<style>
  .ui-textarea {
    width: 100%;
    border: 1px solid var(--color-gray);
    outline: none !important;
    border-radius: 4px;
    padding: 8px;
    transition-duration: 300ms;
    resize: none;
  }

  .ui-textarea:focus {
    border: 1px solid var(--color-gray-dark);
  }

  .ui-textarea:disabled {
    background-color: var(--color-gray);
  }
</style>
