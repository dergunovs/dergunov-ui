<template>
  <button
    class="ui-button"
    :class="[`ui-button-fit-${fit}`, `ui-button-design-${design}`, `ui-button-active-${active}`]"
    @click="$emit('ui-click')"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "TheButton",

    props: {
      fit: { type: String, default: "regular" },
      design: { type: String, default: "regular" },
      active: { type: Boolean, default: false },
    },
  };
</script>

<style>
  .ui-button {
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    background-color: var(--color-primary);
    border: none;
    border-radius: 4px;
    color: #fff;
    padding: 12px 24px;
    transition-duration: 300ms;
  }

  .ui-button-fit-grow {
    width: 100%;
  }

  .ui-button-design-regular:hover {
    background-color: var(--color-primary-dark);
  }

  .ui-button-design-regular.ui-button-active-true {
    background-color: var(--color-primary-dark);
  }

  .ui-button-design-none {
    background: none;
    color: var(--color-black);
    padding: 0;
  }

  .ui-button-design-none:hover {
    text-decoration: underline;
  }

  .ui-button-design-none.ui-button-active-true {
    text-decoration: underline;
  }
</style>
