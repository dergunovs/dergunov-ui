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
          ref="optionElements"
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

<script>
  import arrow from "@/lib-components/assets/icons/arrow.svg";

  export default {
    name: "TheSelect",

    data() {
      return {
        isShowOptions: false,
        currentOption: "",
      };
    },

    props: {
      value: { required: true },
      options: { type: Array },
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
        this.$emit("input", this.currentOption.value);
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

      setOption(option) {
        this.currentOption = option;
        this.hideOptions();
      },

      async focusOnFirstOptionElement() {
        await this.$nextTick();
        this.$refs.optionElements[0].focus();
      },

      focusAt(index) {
        this.$refs.optionElements[index].focus();
      },

      focusUp(index) {
        if (index !== 0) {
          this.$refs.optionElements[index - 1].focus();
        }
      },

      focusDown(index) {
        if (index !== this.$refs.optionElements.length - 1) {
          this.$refs.optionElements[index + 1].focus();
        }
      },
    },

    mounted() {
      if (this.value || this.value === 0) {
        if (typeof this.options[0] === "object") {
          this.currentOption = this.options.find((option) => option.value === this.value);
        }
        if (typeof this.options[0] === "string" || typeof this.options[0] === "number") {
          this.currentOption = { value: this.value, name: this.value };
        }
      }

      document.addEventListener("click", this.hideOptions);
    },

    beforeDestroy() {
      document.removeEventListener("click", this.hideOptions);
    },
  };
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
