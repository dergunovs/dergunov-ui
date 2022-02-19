<template>
  <button
    class="ui-button"
    :class="[
      `ui-button-fit-${props.fit}`,
      `ui-button-design-${props.design}`,
      `ui-button-color-${props.color}`,
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
    color?: "primary" | "success" | "error" | "gray";
    active?: boolean;
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    fit: "regular",
    design: "regular",
    color: "primary",
    active: false,
    disabled: false,
  });

  const emit = defineEmits(["click"]);

  const color = `var(--color-${props.color})`;
  const colorDark = `var(--color-${props.color}-dark)`;
  const colorLight = `var(--color-${props.color}-light)`;
</script>

<style>
  .ui-button {
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    background-color: v-bind(color);
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

  .ui-button-design-regular:hover,
  .ui-button-design-regular.ui-button-active-true {
    background-color: v-bind(colorDark);
  }

  .ui-button-design-outline {
    background: none;
    color: v-bind(color);
    border: 2px solid;
  }

  .ui-button-design-outline:hover {
    color: v-bind(colorDark);
  }

  .ui-button-design-link {
    background: none;
    color: v-bind(color);
    padding: 0;
    font-weight: 400;
    height: auto;
    text-decoration: underline;
  }

  .ui-button-design-link:hover {
    color: v-bind(colorDark);
  }

  .ui-button-disabled-true {
    pointer-events: none;
    background-color: v-bind(colorLight);
  }
</style>
