<template>
  <textarea class="ui-textarea" :class="[`ui-textarea-fit-${fit}`]" @input="$emit('input', $event.target.value)">
  </textarea>
</template>

<script>
  export default {
    name: "TheTextarea",

    props: {
      fit: { type: String, default: "regular" },
    },
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
  .ui-textarea-fit-grow {
    width: 100%;
  }
</style>
