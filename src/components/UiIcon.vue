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

  import arrow from "@/assets/icons/arrow.svg";
  import copy from "@/assets/icons/copy.svg";
  import views from "@/assets/icons/views.svg";

  export default /*#__PURE__*/ defineComponent({
    name: "UiIcon",

    components: { arrow, copy, views },

    props: {
      title: { type: String },
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

  .ui-icon-type-inverted {
    filter: invert(1);
  }
</style>
