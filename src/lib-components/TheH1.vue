<template>
  <h1 class="h1">
    <slot></slot>
  </h1>
</template>

<script>
  import "./assets/style.css";

  export default {
    name: "TheH1",
  };
</script>

<style>
  .h1 {
    font-family: "font";
    font-size: 36px;
    text-align: center;
    margin: 30px 0;
  }
</style>
