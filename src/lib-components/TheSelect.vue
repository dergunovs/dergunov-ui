<template>
  <select :value="value" @change="emitValue" class="ui-select" :class="[`ui-select-fit-${fit}`]">
    <option v-for="(option, index) in options" :key="`option${index}`" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
  export default {
    name: "TheSelect",

    props: {
      value: { required: true },
      options: { type: Array },
      fit: { type: String, default: "regular" },
    },

    methods: {
      emitValue(e) {
        this.$emit("input", e.target.value);
      },
    },
  };
</script>

<style>
  .ui-select {
    border: 1px solid var(--color-gray);
    outline: none !important;
    border-radius: 4px;
    padding: 0 8px;
    height: 44px;
    line-height: 44px;
    transition-duration: 300ms;
    vertical-align: top;
  }
  .ui-select:focus {
    border: 1px solid var(--color-gray-dark);
  }
  .ui-select:disabled {
    background-color: var(--color-gray);
  }
  .ui-select-fit-grow {
    width: 100%;
  }
</style>
