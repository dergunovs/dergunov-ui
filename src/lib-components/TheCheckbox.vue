<template>
  <input type="checkbox" :value="modelValue" :checked="modelValue" ref="checkbox" @change="emitValue" />
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "TheCheckbox",

    props: {
      modelValue: { type: Boolean },
    },

    computed: {
      checkbox: function(): HTMLInputElement {
        return this.$refs.checkbox as HTMLInputElement;
      },
    },

    methods: {
      emitValue(): void {
        this.$emit("update:modelValue", this.checkbox.checked);
      },
    },
  });
</script>
