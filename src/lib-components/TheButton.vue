<template>
  <button class="button" @click="$emit('action')">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "TheButton",
  };
</script>

<style>
  .button {
    display: flex;
    text-decoration: none;
    cursor: pointer;
    background-color: var(--color-primary);
    border: none;
    color: #fff;
    padding: 12px 24px;
  }
</style>
