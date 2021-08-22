<template>
  <component :is="type" :class="[direction, design]">
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
  .horizontal {
    display: flex;
  }
  .horizontal li {
    padding-right: 32px;
  }
  .horizontal li:last-child {
    padding-right: 0;
  }

  .regular {
    margin: 16px 0;
    padding-left: 20px;
  }

  .hidden {
    list-style: none;
  }
  .hidden li {
    padding: 0;
  }

  .styled {
    margin: 16px 0;
    list-style: none;
  }
  ul.styled li {
    border-left: 6px solid var(--color-primary);
    margin-bottom: 8px;
    padding-left: 6px;
  }
  ol.styled {
    margin: 24px 0;
    counter-reset: num;
  }
  ol.styled li {
    position: relative;
    margin-left: 40px;
    margin-bottom: 16px;
  }
  ol.styled.horizontal li {
    margin-bottom: 0;
    padding-right: 16px;
  }
  ol.styled li:last-child {
    margin-bottom: 0;
  }
  ol.styled li::before {
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
