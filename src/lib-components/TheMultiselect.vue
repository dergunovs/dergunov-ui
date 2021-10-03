<template>
  <div @click.stop class="ui-multiselect-block">
    <div
      @click="toggleOptions"
      @keydown.space="toggleOptions"
      @keydown.esc="hideOptions"
      class="ui-multiselect-current"
      :class="{ 'ui-multiselect-current-active': isShowOptions }"
      tabindex="0"
    >
      <div v-if="!currentOptions.length">Выбрать</div>
      <div v-else class="ui-multiselect-current-option-block">
        <div
          v-for="(option, index) in currentOptions"
          :key="`option${index}`"
          @click.stop
          class="ui-multiselect-current-option"
        >
          <span class="ui-multiselect-current-option-name">{{ option.name }}</span>
          <span @click="removeOption(option.value)" class="ui-multiselect-current-option-remove">
            ×
          </span>
        </div>
      </div>

      <img
        :src="$options.components.arrow"
        class="ui-multiselect-current-arrow"
        width="16"
        height="16"
        alt="select"
        loading="lazy"
      />
    </div>

    <transition name="fade">
      <ul class="ui-multiselect-dropdown-block" v-show="isShowOptions">
        <li v-if="!optionsFiltered.length" @click="hideOptions" class="ui-multiselect-dropdown">
          Нет элементов для выбора
        </li>
        <li
          v-for="(option, index) in optionsFiltered"
          :key="`option${index}`"
          :ref="setOptionElementRef"
          @click="addOption(option)"
          @mouseover="focusAt(index)"
          @keydown.up="focusUp(index)"
          @keydown.down="focusDown(index)"
          @keydown.enter="addOption(option)"
          @keydown.esc="hideOptions"
          class="ui-multiselect-dropdown"
          tabindex="0"
        >
          {{ option.name }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";
  import arrow from "@/lib-components/assets/icons/arrow.svg";

  interface Option {
    value: string | number;
    name: string;
  }

  type OptionValue = string | number;

  export default /*#__PURE__*/ defineComponent({
    name: "TheMultiselect",

    data() {
      return {
        isShowOptions: false,
        currentOptions: [] as Option[],
        optionElements: [] as HTMLElement[],
      };
    },

    props: {
      modelValue: { type: Array as PropType<OptionValue[]> },
      options: { type: Array, required: true },
    },

    components: { arrow },

    computed: {
      optionsFiltered: function(): Option[] {
        let currentOptionsValues: (string | number)[] = this.currentOptions.map((option: Option) => {
          return option.value;
        });

        let optionsTypeUpdated: any[] = this.options.map((option: any) => {
          if (typeof option === "string" || typeof option === "number") return { value: option, name: option };
          if (typeof option === "object") return option;
        });

        return optionsTypeUpdated.filter((option: Option) => !currentOptionsValues.includes(option.value));
      },
    },

    watch: {
      currentOptions() {
        let udpatedValues = this.currentOptions.map((option: Option) => option.value);
        this.$emit("update:modelValue", udpatedValues);
      },
    },

    methods: {
      openOptions(): void {
        this.isShowOptions = true;
        this.focusOnFirstOptionElement();
      },

      hideOptions(): void {
        this.isShowOptions = false;
      },

      toggleOptions(): void {
        this.isShowOptions = !this.isShowOptions;
        this.focusOnFirstOptionElement();
      },

      addOption(option: Option): void {
        this.currentOptions = [...this.currentOptions, option];
        if (!this.optionsFiltered.length) {
          this.hideOptions();
        }
      },

      removeOption(optionValueToRemove: string | number): void {
        this.currentOptions = this.currentOptions.filter((option: Option) => option.value !== optionValueToRemove);
      },

      focusOnFirstOptionElement(): void {
        if (this.optionElements.length) {
          setTimeout(() => {
            this.optionElements[0].focus();
          }, 100);
        }
      },

      focusAt(index: number): void {
        this.optionElements[index].focus();
      },

      focusUp(index: number): void {
        if (index !== 0) {
          this.optionElements[index - 1].focus();
        }
      },

      focusDown(index: number): void {
        if (index !== this.optionsFiltered.length - 1) {
          this.optionElements[index + 1].focus();
        }
      },

      setOptionElementRef(el: HTMLElement): void {
        if (el) {
          this.optionElements.push(el);
        }
      },
    },

    beforeUpdate() {
      this.optionElements = [];
    },

    mounted() {
      if (typeof this.options[0] === "object") {
        this.currentOptions = (this.options as Option[]).filter((option: Option) => {
          if (this.modelValue) {
            return this.modelValue.includes(option.value);
          }
        }) as Option[];
      }
      if (typeof this.options[0] === "string" || typeof this.options[0] === "number") {
        let optionsTypeUpdated = (this.options as OptionValue[]).filter((option: OptionValue) => {
          if (this.modelValue) {
            return this.modelValue.includes(option);
          }
        });
        this.currentOptions = optionsTypeUpdated.map((option: any) => {
          return { value: option, name: option };
        });
      }

      document.addEventListener("click", this.hideOptions);
    },

    beforeDestroy() {
      document.removeEventListener("click", this.hideOptions);
    },
  });
</script>

<style>
  .ui-multiselect-block {
    position: relative;
  }
  .ui-multiselect-current {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    padding: 0 8px;
    min-height: 44px;
    line-height: 42px;
    transition-duration: 300ms;
    vertical-align: top;
    cursor: default;
    user-select: none;
    position: relative;
    word-break: break-all;
    white-space: pre;
    overflow: hidden;
  }
  .ui-multiselect-current-option-block {
    display: flex;
    flex-wrap: wrap;
  }
  .ui-multiselect-current-option {
    display: flex;
    align-items: center;
    background-color: var(--color-gray-light);
    margin-right: 8px;
    margin-top: 6px;
    margin-bottom: 6px;
    padding: 2px 8px;
    border-radius: 4px;
    transition-duration: 300ms;
  }
  .ui-multiselect-current-option-name {
    line-height: 1;
  }
  .ui-multiselect-current-option:last-child {
    margin-right: 0;
  }
  .ui-multiselect-current-option-remove {
    margin-left: 4px;
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    background-color: var(--color-gray);
    font-size: 16px;
    font-weight: 700;
    color: var(--color-white);
    width: 24px;
    text-align: center;
  }
  .ui-multiselect-current-option-remove:hover {
    background-color: var(--color-primary);
  }
  .ui-multiselect-current-active {
    border: 1px solid var(--color-gray-dark);
  }
  .ui-multiselect-current-active .ui-multiselect-current-arrow {
    transform: rotate(180deg);
  }
  .ui-multiselect-current:disabled {
    background-color: var(--color-gray);
  }

  .ui-multiselect-dropdown-block {
    position: absolute;
    z-index: 2;
    width: 100%;
    background-color: var(--color-white);
    margin: 0;
    margin-top: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    list-style: none;
    box-shadow: 0px 2px 8px -2px var(--color-gray);
    max-height: 188px;
    overflow-y: auto;
  }
  .ui-multiselect-dropdown {
    padding: 4px 0;
    color: var(--color-black);
    user-select: none;
    outline: none;
    cursor: pointer;
  }
  .ui-multiselect-dropdown:hover {
    text-decoration: underline;
  }
  .ui-multiselect-dropdown:focus {
    text-decoration: underline;
  }
</style>
