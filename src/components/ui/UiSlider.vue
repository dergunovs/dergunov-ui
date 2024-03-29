<template>
  <div>
    <div class="ui-slider-container">
      <button
        type="button"
        @click="prevSlide"
        @touchstart="prevSlide"
        class="ui-slide-button ui-slide-button-prev"
        :class="{ 'ui-slide-button-active': slideCurrent !== 0 }"
      >
        <img
          src="../../assets/icons/arrow.svg"
          class="ui-slide-arrow-left"
          width="48"
          height="48"
          alt="slide-prev"
          loading="lazy"
        />
      </button>

      <div class="ui-slider-wrapper" ref="sliderWrapper">
        <div
          class="ui-slider-slide"
          v-for="(slide, index) in props.slides"
          :key="`slide` + index"
          :ref="
            (el) => {
              if (el) slideElements[index] = el;
            }
          "
        >
          <slot :slide="slide"></slot>
        </div>
      </div>

      <button
        type="button"
        @click="nextSlide"
        @touchstart="nextSlide"
        class="ui-slide-button ui-slide-button-next"
        :class="{ 'ui-slide-button-active': slideCurrent !== slides.length - 1 }"
      >
        <img
          src="../../assets/icons/arrow.svg"
          class="ui-slide-arrow-right"
          width="48"
          height="48"
          alt="slide-right"
          loading="lazy"
        />
      </button>
    </div>

    <div class="ui-slider-bullets">
      <div
        v-for="(number, index) in props.slides"
        :key="`bullet-${index}`"
        @click="setSlideCurrent(index)"
        class="ui-slider-bullet"
        :class="{ 'ui-slider-bullet-active': slideCurrent === index }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, onBeforeUpdate } from "vue";

  const slideCurrent = ref(0);
  const slideWidth = ref(NaN);
  const sliderWrapper = ref<HTMLElement>();
  const slideElements = ref<any[]>([]);

  const props = defineProps<{
    slides: any[];
  }>();

  function setSlideCurrent(index: number): void {
    if (sliderWrapper.value) {
      sliderWrapper.value.style.transform = `translate3d(-${index * slideWidth.value}px, 0px, 0px)`;
      slideCurrent.value = index;
    }
  }

  function prevSlide(): void {
    if (slideCurrent.value !== 0) {
      slideCurrent.value--;
      updateCoordinatesX();
    }
  }

  function nextSlide(): void {
    if (slideCurrent.value !== props.slides.length - 1) {
      slideCurrent.value++;
      updateCoordinatesX();
    }
  }

  function updateSlideWidth(): void {
    const currentSlide = slideElements.value[slideCurrent.value];
    if (currentSlide) {
      slideWidth.value = Number(getComputedStyle(currentSlide).width.slice(0, -2));
      updateCoordinatesX();
    }
  }

  function updateCoordinatesX(): void {
    if (sliderWrapper.value) {
      sliderWrapper.value.style.transform = `translate3d(-${slideCurrent.value * slideWidth.value}px, 0px, 0px)`;
    }
  }

  onMounted(() => {
    setTimeout(() => {
      updateSlideWidth();
    }, 300);

    window.addEventListener("resize", updateSlideWidth);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateSlideWidth);
  });

  onBeforeUpdate(() => {
    slideElements.value = [];
  });
</script>

<style>
  .ui-slider-container {
    position: relative;
    overflow: hidden;
  }

  .ui-slider-wrapper {
    position: relative;
    overflow: visible;
    display: flex;
    user-select: none;
    width: 100%;
    height: 100%;
    transition-property: transform;
    transform: translate3d(0px, 0px, 0px);
    will-change: transform;
    transition-property: transform;
    transition-duration: 600ms;
  }

  .ui-slide-button {
    background-color: transparent;
    opacity: 0;
    width: 96px;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    border: 0;
    transition-duration: 300ms;
  }

  .ui-slide-button-next {
    right: 0;
  }

  .ui-slider-container:hover .ui-slide-button-active {
    cursor: pointer;
    opacity: 0.1;
  }

  .ui-slider-container:hover .ui-slide-button-active:hover {
    opacity: 0.2;
    background-color: var(--color-gray);
  }

  .ui-slide-arrow-left {
    transform: rotate(90deg);
  }

  .ui-slide-arrow-right {
    transform: rotate(-90deg);
  }

  .ui-slider-slide {
    width: 100%;
    position: relative;
    z-index: 1;
    transition-property: transform;
    flex-shrink: 0;
    transition-duration: 600ms;
  }

  .ui-slider-bullets {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  .ui-slider-bullet {
    margin: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    cursor: pointer;
    transition-duration: 300ms;
    background-color: var(--color-gray-light);
  }

  .ui-slider-bullet:hover {
    background-color: var(--color-gray);
  }

  .ui-slider-bullet-active {
    background-color: var(--color-primary);
  }

  .ui-slider-bullet-active:hover {
    background-color: var(--color-primary-dark);
  }
</style>
