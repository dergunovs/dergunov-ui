<template>
  <img
    :src="src ? src : $options.components[title]"
    class="ui-icon"
    :class="[`ui-icon-size-${size}`, `ui-icon-type-${type}`]"
    :alt="alt ? alt : title"
    loading="lazy"
  />
</template>

<script>
  import copy from "@/lib-components/assets/icons/copy.svg";
  import download from "@/lib-components/assets/icons/download.svg";
  import facebook from "@/lib-components/assets/icons/facebook.svg";
  import instagram from "@/lib-components/assets/icons/instagram.svg";
  import count from "@/lib-components/assets/icons/count.svg";
  import vk from "@/lib-components/assets/icons/vk.svg";
  import youtube from "@/lib-components/assets/icons/youtube.svg";

  export default {
    name: "TheIcon",

    components: { copy, download, facebook, instagram, count, vk, youtube },

    props: {
      title: { type: String, default: "download" },
      size: { type: String, default: "medium" },
      type: { type: String, default: "regular" },
      alt: { type: String },
      src: { type: String },
    },
  };
</script>

<style>
  .ui-icon {
    display: inline-block;
    width: 32px;
    height: 32px;
  }

  .ui-icon-size-small {
    width: 16px;
    height: 16px;
  }

  .ui-icon-size-big {
    width: 48px;
    height: 48px;
  }

  .ui-icon-type-round {
    width: 48px;
    height: 48px;
    background-color: var(--color-gray-light);
    padding: 8px;
    border-radius: 50%;
  }

  .ui-icon-type-round:hover {
    background-color: var(--color-primary);
  }

  .ui-icon-type-inverted {
    filter: invert(1);
  }
</style>
