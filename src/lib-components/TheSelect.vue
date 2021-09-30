<template>
  <div @click.stop class="ui-select-block">
    <div
      @click="toggleOptions"
      @keydown.space="toggleOptions"
      @keydown.esc="hideOptions"
      class="ui-select-current"
      :class="{ 'ui-select-current-active': isShowOptions }"
      tabindex="0"
    >
      <div>{{ currentOption.name || "Выбрать" }}</div>
      <img
        :src="$options.components.arrow"
        class="ui-select-current-arrow"
        width="16"
        height="16"
        alt="select"
        loading="lazy"
      />
    </div>

    <transition name="fade">
      <ul class="ui-select-dropdown-block" v-show="isShowOptions">
        <li
          v-for="(option, index) in optionsFiltered"
          :key="`option${index}`"
          :ref="setOptionElementRef"
          @click="setOption(option)"
          @mouseover="focusAt(index)"
          @keydown.up="focusUp(index)"
          @keydown.down="focusDown(index)"
          @keydown.enter="setOption(option)"
          class="ui-select-dropdown"
          :class="{ 'ui-select-dropdown-current': option.name === currentOption.name }"
          tabindex="0"
        >
          {{ option.name }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import arrow from "@/lib-components/assets/icons/arrow.svg";

  interface Option {
    value: string | number;
    name: string;
  }

  export default /*#__PURE__*/ defineComponent({
    name: "TheSelect",

    data() {
      return {
        isShowOptions: false,
        currentOption: {} as Option,
        optionElements: [] as HTMLElement[],
      };
    },

    props: {
      modelValue: { type: [String, Number] },
      options: { type: Array, required: true },
    },

    components: { arrow },

    computed: {
      optionsFiltered: function() {
        return this.options.map((option) => {
          if (typeof option === "string" || typeof option === "number") return { value: option, name: option };
          if (typeof option === "object") return option;
        });
      },
    },

    watch: {
      currentOption() {
        this.$emit("update:modelValue", this.currentOption.value);
      },
    },

    methods: {
      openOptions() {
        this.isShowOptions = true;
        this.focusOnFirstOptionElement();
      },

      hideOptions() {
        this.isShowOptions = false;
      },

      toggleOptions() {
        this.isShowOptions = !this.isShowOptions;
        this.focusOnFirstOptionElement();
      },

      setOption(option: Option) {
        this.currentOption = option;
        this.hideOptions();
      },

      focusOnFirstOptionElement() {
        setTimeout(() => {
          this.optionElements[0].focus();
        }, 100);
      },

      focusAt(index: number) {
        this.optionElements[index].focus();
      },

      focusUp(index: number) {
        if (index !== 0) {
          this.optionElements[index - 1].focus();
        }
      },

      focusDown(index: number) {
        if (index !== this.optionElements.length - 1) {
          this.optionElements[index + 1].focus();
        }
      },

      setOptionElementRef(el: HTMLElement) {
        if (el) {
          this.optionElements.push(el);
        }
      },
    },

    beforeUpdate() {
      this.optionElements = [];
    },

    mounted() {
      if (this.modelValue || this.modelValue === 0) {
        if (typeof this.options[0] === "object") {
          this.currentOption = this.options.find((option: any) => option.value === this.modelValue) as Option;
        }
        if (typeof this.options[0] === "string" || typeof this.options[0] === "number") {
          this.currentOption = { value: this.modelValue, name: this.modelValue as string };
        }
      }

      document.addEventListener("click", this.hideOptions);
    },

    beforeDestroy() {
      document.removeEventListener("click", this.hideOptions);
    },
  });
</script>

<style>
  .ui-select-block {
    position: relative;
  }
  .ui-select-current {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    padding: 0 8px;
    height: 44px;
    line-height: 44px;
    transition-duration: 300ms;
    vertical-align: top;
    cursor: default;
    user-select: none;
    position: relative;
    word-break: break-all;
    white-space: pre;
    overflow: hidden;
  }
  .ui-select-current-active {
    border: 1px solid var(--color-gray-dark);
  }
  .ui-select-current-active .ui-select-current-arrow {
    transform: rotate(180deg);
  }
  .ui-select-current:disabled {
    background-color: var(--color-gray);
  }

  .ui-select-dropdown-block {
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
  .ui-select-dropdown {
    padding: 4px 0;
    color: var(--color-black);
    user-select: none;
    outline: none;
    cursor: pointer;
  }
  .ui-select-dropdown:hover {
    text-decoration: underline;
  }
  .ui-select-dropdown:focus {
    text-decoration: underline;
  }
  .ui-select-dropdown-current {
    color: var(--color-primary);
  }
  .ui-select-dropdown-current:hover {
    color: var(--color-primary-dark);
  }
</style>
