<template>
  <div class="ui-spoler-block">
    <button @click="isExpanded = !isExpanded" class="ui-spoler-button">
      <img
        src="@/assets/icons/arrow.svg"
        class="ui-spoiler-arrow"
        :class="{ 'ui-spoiler-arrow-expanded': isExpanded }"
        width="16"
        height="16"
        alt="spoiler"
        loading="lazy"
      />
      {{ isExpanded ? titleExpanded : title }}
    </button>

    <transition name="fade">
      <div v-show="isExpanded" class="ui-spoler" :class="{ 'ui-spoler-expanded': isExpanded }">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "UiSpoiler",

    data() {
      return {
        isExpanded: false,
      };
    },

    props: {
      title: { type: String, default: "Раскрыть" },
      titleExpanded: { type: String, default: "Свернуть" },
      modelValue: { type: Boolean, default: false },
    },

    emits: ["update:modelValue"],

    watch: {
      isExpanded() {
        this.$emit("update:modelValue", this.isExpanded);
      },
    },

    beforeMount() {
      this.isExpanded = this.modelValue;
    },
  });
</script>

<style>
  .ui-spoler-block {
    display: flex;
    flex-direction: column;
  }

  .ui-spoler-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    border: none;
    background-color: var(--color-gray-light);
    padding: 0px 24px;
    height: 44px;
    font-weight: 700;
    transition-duration: 300ms;
  }

  .ui-spoler-button:hover {
    background-color: var(--color-gray);
  }

  .ui-spoiler-arrow {
    transform: rotate(270deg);
    margin-right: 4px;
    transition-duration: 200ms;
  }
  .ui-spoiler-arrow-expanded {
    transform: rotate(360deg);
  }

  .ui-spoler {
    padding: 16px 24px;
    border-bottom: 1px solid var(--color-gray-light);
    border-left: 1px solid var(--color-gray-light);
    border-right: 1px solid var(--color-gray-light);
  }
</style>
