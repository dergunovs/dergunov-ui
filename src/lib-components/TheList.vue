<template>
  <component :is="type" :class="[`list-direction-${direction}`, `list-design-${design}`]">
    <slot></slot>
  </component>
</template>

<script>
  export default {
    name: "TheList",

    props: {
      type: { type: String, default: "ul" },
      direction: { type: String, default: "vertical" },
      design: { type: String, default: "regular" },
    },

    data() {
      return {};
    },
  };
</script>

<style>
  .list-direction-horizontal {
    display: flex;
  }
  .list-direction-horizontal li {
    padding-right: 32px;
  }
  .list-direction-horizontal li:last-child {
    padding-right: 0;
  }

  .list-design-regular {
    margin: 16px 0;
    padding-left: 20px;
  }

  .list-design-none {
    list-style: none;
  }
  .list-design-none li {
    padding: 0;
  }

  .list-design-styled {
    margin: 16px 0;
    list-style: none;
  }
  ul.list-design-styled li {
    border-left: 6px solid var(--color-primary);
    margin-bottom: 8px;
    padding-left: 6px;
  }
  ol.list-design-styled {
    margin: 24px 0;
    counter-reset: num;
  }
  ol.list-design-styled li {
    position: relative;
    margin-left: 40px;
    margin-bottom: 16px;
  }
  ol.list-design-styled.horizontal li {
    margin-bottom: 0;
    padding-right: 16px;
  }
  ol.list-design-styled li:last-child {
    margin-bottom: 0;
  }
  ol.list-design-styled li::before {
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
