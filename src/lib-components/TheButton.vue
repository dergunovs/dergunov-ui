<template>
  <button
    class="button"
    :class="[`button-fit-${fit}`, `button-design-${design}`, `button-active-${active}`]"
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
  .button {
    display: flex;
    text-decoration: none;
    cursor: pointer;
    background-color: var(--color-primary);
    border: none;
    border-radius: 4px;
    color: #fff;
    padding: 12px 24px;
    transition-duration: 300ms;
  }

  .button-fit-grow {
    width: 100%;
  }

  .button-design-regular:hover {
    background-color: var(--color-primary-dark);
  }

  .button-design-regular.button-active-true {
    background-color: var(--color-primary-dark);
  }

  .button-design-none {
    background: none;
    color: var(--color-black);
    padding: 0;
  }

  .button-design-none:hover {
    text-decoration: underline;
  }

  .button-design-none.button-active-true {
    text-decoration: underline;
  }
</style>
