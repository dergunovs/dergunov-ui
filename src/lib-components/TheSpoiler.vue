<template>
  <div class="ui-spoler-block">
    <button @click="expanded = !expanded" class="ui-spoler-button">
      {{ expanded ? titleExpanded : title }}
    </button>

    <transition name="fade">
      <div v-show="expanded" class="ui-spoler" :class="{ 'ui-spoler-expanded': expanded }">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "TheSpoiler",

    data() {
      return {
        expanded: false,
      };
    },

    props: {
      title: { type: String, default: "Раскрыть" },
      titleExpanded: { type: String, default: "Свернуть" },
      modelValue: { type: Boolean, default: false },
    },

    watch: {
      expanded() {
        this.$emit("update:modelValue", this.expanded);
      },
    },

    beforeMount() {
      this.expanded = this.modelValue;
    },
  });
</script>

<style>
  .ui-spoler-block {
    display: flex;
    flex-direction: column;
  }

  .ui-spoler-button {
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

  .ui-spoler {
    padding: 16px 24px;
    border-bottom: 1px solid var(--color-gray-light);
    border-left: 1px solid var(--color-gray-light);
    border-right: 1px solid var(--color-gray-light);
  }
</style>
