<template>
  <label class="ui-checkbox-block">
    <input
      type="checkbox"
      :value="modelValue"
      :checked="modelValue"
      ref="checkbox"
      @change="emitValue"
      class="ui-checkbox"
      :class="`ui-checkbox-design-${design}`"
    />
    <div class="ui-checkbox-fake" :class="`ui-checkbox-fake-design-${design}`"></div>
  </label>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  type Value = boolean | string | number;

  export default /*#__PURE__*/ defineComponent({
    name: "TheCheckbox",

    data() {
      return {
        initialValue: "" as Value,
      };
    },

    props: {
      modelValue: { type: [Boolean, String, Number] },
      design: { type: String, default: "none" },
    },

    computed: {
      checkbox: function(): HTMLInputElement {
        return this.$refs.checkbox as HTMLInputElement;
      },
    },

    methods: {
      emitValue(): void {
        let valueNotBoolean = this.checkbox.checked ? this.initialValue : false;
        let valueFormatted = typeof this.initialValue === "boolean" ? this.checkbox.checked : valueNotBoolean;
        this.$emit("update:modelValue", valueFormatted);
      },
    },

    mounted() {
      this.initialValue = this.modelValue as Value;
    },
  });
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
    background: var(--color-primary);
    transform: translateX(20px);
  }
</style>
