<template>
  <div v-if="modelValue" class="ui-popup-block" @mousedown="hidePopup">
    <div @mousedown.stop @keydown.esc="hidePopup" class="ui-popup" ref="popup" tabindex="0">
      <button @click="hidePopup" class="ui-popup-close">×</button>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "UiPopup",

    props: {
      modelValue: { type: Boolean, default: false },
    },

    emits: ["update:modelValue"],

    watch: {
      modelValue() {
        if (this.modelValue === true) {
          this.focusAtPopup();
        }
      },
    },

    methods: {
      hidePopup(): void {
        this.$emit("update:modelValue", false);
      },

      focusAtPopup(): void {
        setTimeout(() => {
          (this.$refs.popup as HTMLElement).focus();
        }, 100);
      },
    },

    mounted() {
      if (this.modelValue) {
        this.focusAtPopup();
      }
    },
  });
</script>

<style>
  .ui-popup-block {
    background-color: #000a;
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ui-popup {
    position: relative;
    background-color: var(--color-white);
    padding: 32px 64px;
    max-width: 60%;
    border-radius: 8px;
    box-shadow: 0px 0px 8px -2px var(--color-black);
    outline: none;
  }

  .ui-popup-close {
    position: absolute;
    border: none;
    background-color: var(--color-gray-light);
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    transition-duration: 300ms;
  }

  .ui-popup-close:hover {
    background-color: var(--color-gray);
  }
</style>
