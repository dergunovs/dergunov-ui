<template>
  <textarea
    class="ui-textarea"
    :value="props.modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  ></textarea>
</template>

<script setup lang="ts">
  interface Props {
    modelValue?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    modelValue: "",
  });

  const emit = defineEmits(["update:modelValue"]);
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
