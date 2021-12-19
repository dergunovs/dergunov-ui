<template>
  <div class="ui-image-root">
    <button @click="showImage" class="ui-image-button">
      <slot></slot>
    </button>

    <div v-if="isShowImage" @keydown.esc="closeImage" class="ui-image-block" ref="imageBlock" tabindex="0">
      <div class="ui-image-panel">
        <button @click="zoomOut" :disabled="currentZoom === 50">Уменьшить</button>
        <button @click="zoomIn" :disabled="isReachedMaxZoom">Увеличить</button>
        <button @click="closeImage" class="ui-image-panel-close">×</button>
      </div>

      <img :src="props.src" class="ui-image" :class="`ui-image-zoom-${currentZoom}`" ref="image" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { nextTick, ref } from "vue";

  const isShowImage = ref(false);
  const currentZoom = ref(100);
  const isReachedMaxZoom = ref(false);
  const imageBlock = ref<HTMLElement>();
  const image = ref<HTMLElement>();

  const props = defineProps<{
    src: string;
  }>();

  async function showImage(): Promise<void> {
    isShowImage.value = true;

    await nextTick();
    checkMaxSize();
    if (imageBlock.value) imageBlock.value.focus();
    document.querySelector("body")!.style.overflow = "hidden";
  }

  function zoomOut(): void {
    if (currentZoom.value > 50) {
      currentZoom.value = currentZoom.value - 25;
      checkMaxSize();
    }
  }

  function zoomIn(): void {
    if (currentZoom.value < 200) {
      currentZoom.value = currentZoom.value + 25;
      checkMaxSize();
    }
  }

  function checkMaxSize(): void {
    setTimeout(() => {
      if (image.value) {
        const imageWidth = ((Number(getComputedStyle(image.value).width.slice(0, -2)) + 1) * currentZoom.value) / 100;
        const imageHeight = ((Number(getComputedStyle(image.value).height.slice(0, -2)) + 1) * currentZoom.value) / 100;

        isReachedMaxZoom.value = imageWidth > window.innerWidth || imageHeight > window.innerHeight ? true : false;
      }
    }, 100);
  }

  function closeImage(): void {
    isShowImage.value = false;
    currentZoom.value = 100;
    document.querySelector("body")!.style.overflow = "auto";
  }
</script>

<script lang="ts">
  export default { name: "UiImage" };
</script>

<style>
  .ui-image-root {
    display: inline-block;
  }

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
    z-index: 9;
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
