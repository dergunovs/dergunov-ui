<template>
  <div @click.stop class="ui-multiselect-block">
    <div
      @click="showOptions = !showOptions"
      @keydown.space="showOptions = !showOptions"
      @keydown.esc="hideOptions"
      class="ui-multiselect-current"
      :class="{ 'ui-multiselect-current-active': showOptions }"
      tabindex="0"
    >
      <template v-if="!currentOptions.length">Выбрать</template>
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
      <ul class="ui-multiselect-dropdown-block" v-if="showOptions">
        <li v-if="!optionsFiltered.length" @click="hideOptions" class="ui-multiselect-dropdown">
          Нет элементов для выбора
        </li>
        <li
          v-for="(option, index) in optionsFiltered"
          :key="`option${index}`"
          @click="addOption(option)"
          class="ui-multiselect-dropdown"
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
    name: "TheMultiselect",

    data() {
      return {
        showOptions: false,
        currentOptions: [],
      };
    },

    props: {
      value: { type: [Array, String] },
      options: { type: Array },
    },

    components: { arrow },

    computed: {
      optionsFiltered: function() {
        let currentOptionsValues = this.currentOptions.map((option) => {
          return option.value;
        });

        return this.options.filter((option) => !currentOptionsValues.includes(option.value));
      },
    },

    watch: {
      currentOptions() {
        let udpatedValues = this.currentOptions.map((option) => option.value);
        this.$emit("input", udpatedValues);
      },
    },

    methods: {
      addOption(option) {
        this.currentOptions.push(option);
        if (!this.optionsFiltered.length) {
          this.hideOptions();
        }
      },

      removeOption(optionValueToRemove) {
        this.currentOptions = this.currentOptions.filter((option) => option.value !== optionValueToRemove);
      },

      hideOptions() {
        this.showOptions = false;
      },
    },

    mounted() {
      if (this.value) {
        this.currentOptions = this.options.filter((option) => this.value.includes(option.value));
      }

      document.addEventListener("click", this.hideOptions);
    },

    beforeDestroy() {
      document.removeEventListener("click", this.hideOptions);
    },
  };
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
    color: var(--color-gray-dark);
    user-select: none;
  }
  .ui-multiselect-dropdown:hover {
    color: var(--color-black);
    cursor: pointer;
  }
</style>
