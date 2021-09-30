<template>
  <input
    class="ui-input"
    :value="modelValue"
    :type="type"
    @input="emitValue($event.target.value)"
    :maxlength="this.type === 'tel' ? '18' : ''"
  />
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "TheInput",

    props: {
      modelValue: { type: String },
      type: { type: String, default: "text" },
    },

    methods: {
      emitValue(modelValue: string) {
        this.type === "tel"
          ? this.$emit("update:modelValue", this.maskToTel(modelValue))
          : this.$emit("update:modelValue", modelValue);
      },

      maskToTel(modelValue: string) {
        let x = modelValue.replace(/\D/g, "").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        if (x) {
          return !x[3] ? `+7 (${x[2]}` : `+7 (${x[2]}) ${x[3]}` + (x[4] ? `-${x[4]}` : "") + (x[5] ? `-${x[5]}` : "");
        }
      },
    },
  });
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
