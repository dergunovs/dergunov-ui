<template>
  <img
    :src="require(`./assets/icons/${this.title}.svg`)"
    class="icon"
    :class="[`icon-size-${size}`, `icon-type-${type}`]"
    :alt="title"
  />
</template>

<script>
  import download from "./assets/icons/download.svg";
  import facebook from "./assets/icons/facebook.svg";
  import instagram from "./assets/icons/instagram.svg";
  import count from "./assets/icons/count.svg";
  import vk from "./assets/icons/vk.svg";
  import youtube from "./assets/icons/youtube.svg";

  export default {
    name: "TheIcon",

    components: { download, facebook, instagram, count, vk, youtube },

    props: {
      title: { type: String, required: true },
      size: { type: String, default: "medium" },
      type: { type: String, default: "regular" },
    },
  };
</script>

<style>
  .icon {
    display: inline-block;
  }
</style>
