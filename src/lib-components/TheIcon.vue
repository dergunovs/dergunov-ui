<template>
  <img
    :src="src ? src : $options.components[title]"
    class="ui-icon"
    :class="[`ui-icon-size-${size}`, `ui-icon-type-${type}`]"
    :alt="alt ? alt : title"
    loading="lazy"
  />
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import arrow from "./assets/icons/arrow.svg";
  import copy from "./assets/icons/copy.svg";
  import download from "./assets/icons/download.svg";
  import facebook from "./assets/icons/facebook.svg";
  import instagram from "./assets/icons/instagram.svg";
  import views from "./assets/icons/views.svg";
  import vk from "./assets/icons/vk.svg";
  import youtube from "./assets/icons/youtube.svg";

  export default /*#__PURE__*/ defineComponent({
    name: "TheIcon",

    components: { arrow, copy, download, facebook, instagram, views, vk, youtube },

    props: {
      title: { type: String, default: "download" },
      size: { type: String, default: "medium" },
      type: { type: String, default: "regular" },
      alt: { type: String },
      src: { type: String },
    },
  });
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
