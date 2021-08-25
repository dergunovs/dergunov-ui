<template>
  <img :src="icon" class="icon" :class="[`icon-size-${size}`, `icon-type-${type}`]" :alt="title" />
</template>

<script>
  import download from "@/lib-components/assets/download.svg";
  import facebook from "@/lib-components/assets/facebook.svg";
  import instagram from "@/lib-components/assets/instagram.svg";
  import count from "@/lib-components/assets/count.svg";
  import vk from "@/lib-components/assets/vk.svg";
  import youtube from "@/lib-components/assets/youtube.svg";

  export default {
    name: "TheIcon",

    components: { download, facebook, instagram, count, vk, youtube },

    props: {
      title: { type: String, required: true },
      size: { type: String, default: "medium" },
      type: { type: String, default: "regular" },
    },

    computed: {
      icon: function() {
        return require("@/lib-components/assets/" + this.title + ".svg");
      },
    },
  };
</script>

<style>
  .icon {
    display: inline-block;
  }
</style>
