<template>
  <component :is="type" :class="[`ui-list-direction-${direction}`, `ui-list-design-${design}`]">
    <slot></slot>
  </component>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "TheList",

    props: {
      type: { type: String, default: "ul" },
      direction: { type: String, default: "column" },
      design: { type: String, default: "regular" },
    },
  });
</script>

<style>
  .ui-list-direction-row {
    display: flex;
  }

  .ui-list-direction-row li {
    padding-right: 32px;
  }

  .ui-list-direction-row li:last-child {
    padding-right: 0;
  }

  .ui-list-design-regular {
    margin: 16px 0;
    padding-left: 20px;
  }

  .ui-list-design-none {
    list-style: none;
  }

  .ui-list-design-none li {
    padding: 0;
  }

  .ui-list-design-styled {
    margin: 16px 0;
    list-style: none;
  }

  ul.ui-list-design-styled li {
    border-left: 6px solid var(--color-primary);
    margin-bottom: 8px;
    padding-left: 6px;
  }

  ol.ui-list-design-styled {
    margin: 24px 0;
    counter-reset: num;
  }

  ol.ui-list-design-styled li {
    position: relative;
    margin-left: 40px;
    margin-bottom: 16px;
  }

  ol.ui-list-design-styled.row li {
    margin-bottom: 0;
    padding-right: 16px;
  }

  ol.ui-list-design-styled li:last-child {
    margin-bottom: 0;
  }

  ol.ui-list-design-styled li::before {
    content: counter(num);
    counter-increment: num;
    position: absolute;
    top: -3px;
    left: -40px;
    width: 32px;
    height: 32px;
    background-color: var(--color-primary);
    color: var(--color-white);
    text-align: center;
    font-size: 20px;
    line-height: 1.6;
    font-weight: 700;
    border-radius: 50%;
  }
</style>
