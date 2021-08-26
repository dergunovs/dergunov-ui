<template>
  <img
    :src="$options.components[title]"
    class="icon"
    :class="[`icon-size-${size}`, `icon-type-${type}`]"
    :alt="title"
  />
</template>

<script>
  import download from "@/lib-components/assets/icons/download.svg";
  import facebook from "@/lib-components/assets/icons/facebook.svg";
  import instagram from "@/lib-components/assets/icons/instagram.svg";
  import count from "@/lib-components/assets/icons/count.svg";
  import vk from "@/lib-components/assets/icons/vk.svg";
  import youtube from "@/lib-components/assets/icons/youtube.svg";

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
