<template>
  <button @click="showImage" class="ui-image-button">
    <slot></slot>
  </button>

  <div v-if="isShowImage" @keydown.esc="closeImage" class="ui-image-block" tabindex="0">
    <div class="ui-image-panel">
      <button @click="zoomOut">Уменьшить</button>
      <button @click="zoomIn" :disabled="isReachedMaxZoom">Увеличить</button>
      <button @click="closeImage" class="ui-image-panel-close">×</button>
    </div>

    <img :src="src" class="ui-image" :class="`ui-image-zoom-${currentZoom}`" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, nextTick } from "vue";

  export default defineComponent({
    name: "TheImage",

    data() {
      return {
        isShowImage: false,
        currentZoom: 100,
        isReachedMaxZoom: false,
      };
    },

    props: {
      src: { type: String, required: true },
    },

    methods: {
      async showImage(): Promise<void> {
        this.isShowImage = true;

        await nextTick();
        let imageBlock = document.querySelector(".ui-image-block") as HTMLElement;
        imageBlock.focus();
        this.checkMaxSize();
      },

      zoomOut(): void {
        if (this.currentZoom > 50) {
          this.currentZoom = this.currentZoom - 25;
          this.checkMaxSize();
        }
      },

      zoomIn(): void {
        if (this.currentZoom < 200) {
          this.currentZoom = this.currentZoom + 25;
          this.checkMaxSize();
        }
      },

      checkMaxSize(): void {
        setTimeout(() => {
          let size = document.querySelector(".ui-image") as HTMLElement;

          let imageWidth = ((Number(getComputedStyle(size).width.slice(0, -2)) + 1) * this.currentZoom) / 100;
          let imageHeight = ((Number(getComputedStyle(size).height.slice(0, -2)) + 1) * this.currentZoom) / 100;

          this.isReachedMaxZoom = imageWidth > window.innerWidth || imageHeight > window.innerHeight ? true : false;
        }, 100);
      },

      closeImage(): void {
        this.isShowImage = false;
        this.currentZoom = 100;
      },
    },
  });
</script>

<style>
  .ui-image-button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .ui-image-block {
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0 0 0 0;
    background-color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ui-image-panel {
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    top: 0;
  }

  .ui-image-panel button {
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition-duration: 300ms;
    padding: 0 8px;
  }

  .ui-image-panel button:hover {
    background-color: var(--color-gray-light);
  }

  .ui-image-panel-close {
    font-size: 48px;
    width: 64px;
    height: 64px;
    font-weight: 700;
  }

  .ui-image {
    position: relative;
    z-index: 1;
    max-height: 100%;
    transition-duration: 300ms;
  }

  .ui-image-zoom-50 {
    transform: scale(0.5);
  }

  .ui-image-zoom-75 {
    transform: scale(0.75);
  }

  .ui-image-zoom-100 {
    transform: scale(1);
  }

  .ui-image-zoom-125 {
    transform: scale(1.25);
  }

  .ui-image-zoom-150 {
    transform: scale(1.5);
  }

  .ui-image-zoom-175 {
    transform: scale(1.75);
  }

  .ui-image-zoom-200 {
    transform: scale(2);
  }
</style>
