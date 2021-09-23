<template>
  <div @click.stop class="ui-select-block">
    <div
      @click="showOptions = !showOptions"
      class="ui-select-current"
      :class="{ 'ui-select-current-active': showOptions }"
    >
      {{ currentOption.name || "Выбрать" }}
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
      <ul class="ui-select-dropdown-block" v-show="showOptions">
        <li
          v-for="(option, index) in options"
          :key="`option${index}`"
          @click="
            currentOption = option;
            showOptions = false;
          "
          class="ui-select-dropdown"
          :class="{ 'ui-select-dropdown-current': option.name === currentOption.name }"
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
        showOptions: false,
        currentOption: "",
      };
    },

    props: {
      value: { required: true },
      options: { type: Array },
      fit: { type: String, default: "regular" },
    },

    components: { arrow },

    watch: {
      currentOption() {
        this.$emit("input", this.currentOption.value);
      },
    },

    mounted() {
      this.currentOption = this.value ? this.options.find((option) => option.value === this.value) : "";
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
    border: 1px solid var(--color-gray);
    outline: none !important;
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
  .ui-select-current-arrow {
    background-color: var(--color-white);
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
    box-shadow: 0px 2px 8px var(--color-gray);
  }
  .ui-select-dropdown {
    padding: 4px 0;
    color: var(--color-gray-dark);
  }
  .ui-select-dropdown:hover {
    color: var(--color-black);
    cursor: pointer;
  }
  .ui-select-dropdown-current {
    color: var(--color-black);
  }
</style>
