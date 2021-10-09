<template>
  <label class="ui-radio-block">
    <input type="radio" :value="value" :checked="modelValue === value" @change="emitValue" class="ui-radio" />
    <div class="ui-radio-fake"></div>
  </label>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "TheRadio",

    props: {
      modelValue: { type: [Boolean, String, Number] },
      value: { type: [Boolean, String, Number] },
    },

    methods: {
      emitValue(): void {
        this.$emit("update:modelValue", this.value);
      },
    },
  });
</script>

<style>
  .ui-radio-block {
    position: relative;
    display: flex;
    align-items: center;
  }

  .ui-radio {
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    z-index: 1;
  }

  .ui-radio:focus {
    border-radius: 50%;
    width: 24px;
    height: 24px;
  }

  .ui-radio-fake {
    border: 2px solid var(--color-primary);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    cursor: pointer;
    z-index: 2;
  }

  .ui-radio-fake:hover {
    background-color: var(--color-gray-light);
  }

  .ui-radio:checked + .ui-radio-fake {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3ccircle cx='4' cy='4' r='3'/%3e%3c/svg%3e");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 16px;
  }
</style>
