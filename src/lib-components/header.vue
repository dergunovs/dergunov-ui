<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: "d-header",
  };
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eee;
    padding: 20px;
  }
</style>
