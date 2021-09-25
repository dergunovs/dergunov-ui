<template>
  <textarea class="ui-textarea" @input="$emit('input', $event.target.value)"> </textarea>
</template>

<script>
  export default {
    name: "TheTextarea",
  };
</script>

<style>
  .ui-textarea {
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
