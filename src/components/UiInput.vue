<template>
  <input
    class="ui-input"
    :value="props.modelValue"
    :type="props.type"
    @input="emitValue(($event.target as HTMLInputElement).value)"
    :maxlength="props.type === 'tel' ? '18' : ''"
    ref="input"
    :disabled="props.disabled"
  />
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const input = ref<HTMLInputElement>();

  interface Props {
    modelValue?: string;
    type?: string;
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    modelValue: "",
    type: "text",
    disabled: false,
  });

  const emit = defineEmits(["update:modelValue"]);

  function emitValue(inputValue: string): void {
    props.type === "tel" ? emit("update:modelValue", maskToTel(inputValue)) : emit("update:modelValue", inputValue);
  }

  function maskToTel(inputValue: string): string {
    if (input.value) {
      const isLastInputValueDigit = !/[^0-9]/g.test((input.value as any).value.at(-1));
      const isAddingSymbol = props.modelValue < input.value.value;

      if (isAddingSymbol) {
        if (isLastInputValueDigit) {
          const x = inputValue.replace(/[^\d]/g, "").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
          if (x) {
            return !x[3] ? `+7 (${x[2]}` : `+7 (${x[2]}) ${x[3]}` + (x[4] ? `-${x[4]}` : "") + (x[5] ? `-${x[5]}` : "");
          } else {
            return "";
          }
        } else {
          input.value.value = props.modelValue;
          return input.value.value;
        }
      } else {
        input.value.value = props.modelValue;
        return input.value.value.slice(0, -1);
      }
    } else return "";
  }
</script>

<style>
  .ui-input {
    width: 100%;
    border: 1px solid var(--color-gray);
    outline: none !important;
    border-radius: 4px;
    padding: 0 8px;
    height: 44px;
    line-height: 44px;
    transition-duration: 300ms;
  }

  .ui-input:focus {
    border: 1px solid var(--color-gray-dark);
  }

  .ui-input:disabled {
    background-color: var(--color-gray);
  }
</style>
