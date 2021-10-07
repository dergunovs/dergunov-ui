<template>
  <input type="checkbox" :value="modelValue" :checked="modelValue" ref="checkbox" @change="emitValue" />
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
