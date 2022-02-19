<template>
  <label class="ui-checkbox-block">
    <input
      type="checkbox"
      :value="props.modelValue"
      :checked="!!props.modelValue"
      :disabled="props.disabled"
      ref="checkbox"
      @change="emitValue"
      class="ui-checkbox"
      :class="`ui-checkbox-design-${design}`"
    />
    <div
      class="ui-checkbox-fake"
      :class="[`ui-checkbox-fake-design-${design}`, `ui-checkbox-fake-disabled-${props.disabled}`]"
    ></div>
  </label>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  type Value = boolean | string | number;

  const initialValue = ref<Value>(false);
  const checkbox = ref<HTMLInputElement>();

  interface Props {
    modelValue?: Value;
    design?: "none" | "switch";
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
    design: "none",
    disabled: false,
  });

  const emit = defineEmits(["update:modelValue"]);

  function emitValue(): void {
    if (checkbox.value) {
      const valueNotBoolean = checkbox.value.checked ? initialValue.value : false;
      const valueFormatted = typeof initialValue.value === "boolean" ? checkbox.value.checked : valueNotBoolean;
      emit("update:modelValue", valueFormatted);
    }
  }

  initialValue.value = props.modelValue;
</script>

<style>
  .ui-checkbox-block {
    position: relative;
    display: flex;
    align-items: center;
  }

  .ui-checkbox {
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    z-index: 1;
  }

  .ui-checkbox:focus {
    border-radius: 2px;
    width: 24px;
    height: 24px;
  }

  .ui-checkbox-fake {
    border: 2px solid var(--color-gray);
    border-radius: 4px;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    cursor: pointer;
    z-index: 2;
  }

  .ui-checkbox-fake:hover {
    background-color: var(--color-gray-light);
  }

  .ui-checkbox:checked + .ui-checkbox-fake {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23000' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 16px;
  }

  .ui-checkbox-design-switch:focus {
    width: 36px;
    height: 100%;
  }

  .ui-checkbox-fake-design-switch {
    width: 36px;
    height: 12px;
    position: relative;
    background-color: var(--color-gray-light);
    transition: 200ms;
    border: none;
  }

  .ui-checkbox-fake-design-switch:hover {
    background-color: var(--color-gray);
  }

  .ui-checkbox-fake-design-switch::before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: -4px;
    left: -2px;
    background-color: var(--color-white);
    border-radius: 50%;
    box-shadow: 0px 0px 3px -1px var(--color-black);
    transition: 200ms;
  }

  .ui-checkbox:checked + .ui-checkbox-fake-design-switch {
    background: var(--color-gray);
  }

  .ui-checkbox:checked + .ui-checkbox-fake-design-switch:before {
    background: var(--color-success);
    transform: translateX(20px);
  }

  .ui-checkbox-fake-disabled-true,
  .ui-checkbox:checked + .ui-checkbox-fake-disabled-true {
    pointer-events: none;
    background-color: var(--color-gray-light);
  }
</style>
