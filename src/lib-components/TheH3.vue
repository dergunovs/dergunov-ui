<template>
  <h1 class="h3">
    <slot></slot>
  </h1>
</template>

<script>
  export default {
    name: "TheH1",
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
