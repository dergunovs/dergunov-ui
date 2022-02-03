<template>
  <button
    class="ui-button"
    :class="[
      `ui-button-fit-${props.fit}`,
      `ui-button-design-${props.design}`,
      `ui-button-active-${props.active}`,
      `ui-button-disabled-${props.disabled}`,
    ]"
    :disabled="disabled"
    @click="emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  interface Props {
    fit?: "regular" | "grow";
    design?: "regular" | "link" | "outline";
    active?: boolean;
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    fit: "regular",
    design: "regular",
    active: false,
    disabled: false,
  });

  const emit = defineEmits(["click"]);
</script>

<script lang="ts">
  export default { name: "UiButton" };
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
    color: var(--color-white);
    padding: 0 24px;
    height: 44px;
    font-weight: 700;
    transition-duration: 300ms;
    white-space: nowrap;
  }

  .ui-button:hover {
    color: var(--color-white);
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

  .ui-button-design-outline {
    background: none;
    color: var(--color-primary);
    border: 2px solid;
  }

  .ui-button-design-outline:hover {
    color: var(--color-primary-dark);
  }

  .ui-button-design-link {
    background: none;
    color: var(--color-primary);
    padding: 0;
    font-weight: 400;
    height: auto;
    text-decoration: underline;
  }

  .ui-button-design-link:hover {
    color: var(--color-primary-dark);
  }

  .ui-button-disabled-true {
    pointer-events: none;
    background-color: var(--color-primary-light);
  }
</style>
