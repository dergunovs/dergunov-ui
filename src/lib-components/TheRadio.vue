<template>
  <div :class="`ui-radio-direction-${direction}`">
    <label v-for="(option, index) in optionsFiltered" :key="`option-${index}`" class="ui-radio-block">
      <input
        type="radio"
        :value="option.value"
        :checked="modelValue === option.value"
        @change="setOption(option)"
        ref="radio"
        :name="`radio-${$.uid}`"
        class="ui-radio"
      />

      <div class="ui-radio-fake"></div>
      {{ option.name }}
    </label>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";

  interface Option {
    value: string | number;
    name: string;
  }

  type OptionValue = string | number;

  export default /*#__PURE__*/ defineComponent({
    name: "TheRadio",

    data() {
      return {
        currentOption: {} as Option,
        optionElements: [] as HTMLElement[],
      };
    },

    props: {
      modelValue: { type: [String, Number] as PropType<OptionValue> },
      options: { type: Array, required: true },
      direction: { type: String, default: "column" },
    },

    computed: {
      optionsFiltered: function(): Option[] {
        return this.options.map((option: any) => {
          if (typeof option === "string" || typeof option === "number") return { value: option, name: option };
          if (typeof option === "object") return option;
        });
      },
      radio: function(): HTMLInputElement {
        return this.$refs.radio as HTMLInputElement;
      },
    },

    watch: {
      currentOption() {
        this.$emit("update:modelValue", this.currentOption.value);
      },
    },

    methods: {
      setOption(option: Option): void {
        this.currentOption = option;
      },
    },
  });
</script>

<style>
  .ui-radio-direction-column {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ui-radio-direction-row {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  .ui-radio-block {
    position: relative;
    display: flex;
    align-items: center;
  }

  .ui-radio-block:last-child {
    margin-right: 0;
    margin-bottom: 0;
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
    border: 2px solid var(--color-gray);
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
