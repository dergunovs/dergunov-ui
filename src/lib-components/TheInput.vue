<template>
  <input
    class="ui-input"
    :value="value"
    :type="type"
    @input="emitValue($event.target.value)"
    :maxlength="this.type === 'tel' ? '18' : ''"
  />
</template>

<script>
  export default {
    name: "TheInput",

    props: {
      value: { type: String, default: "" },
      type: { type: String, default: "text" },
    },

    methods: {
      emitValue(inputValue) {
        this.type === "tel" ? this.$emit("input", this.maskToTel(inputValue)) : this.$emit("input", inputValue);
      },

      maskToTel(inputValue) {
        let x = inputValue.replace(/\D/g, "").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        return !x[3] ? `+7 (${x[2]}` : `+7 (${x[2]}) ${x[3]}` + (x[4] ? `-${x[4]}` : "") + (x[5] ? `-${x[5]}` : "");
      },
    },
  };
</script>

<style>
  .ui-input {
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
