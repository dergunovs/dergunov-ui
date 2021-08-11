<template>
  <button class="button" @click="$emit('action')">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "d-button",
  };
</script>

<style>
  .button {
    display: flex;
    text-decoration: none;
    cursor: pointer;
    background-color: #ed0d0d;
    border: none;
    color: #fff;
    padding: 12px 24px;
  }
</style>
