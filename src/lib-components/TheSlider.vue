<template>
  <div>
    <div class="ui-slider-container">
      <button
        type="button"
        @click="prevSlide"
        @touchstart="prevSlide"
        class="ui-slide-button ui-slide-button-prev"
        :class="{ 'ui-slide-button-active': this.slideCurrent !== 0 }"
      >
        <img
          :src="$options.components.arrow"
          class="ui-slide-arrow-left"
          width="48"
          height="48"
          alt="slide-prev"
          loading="lazy"
        />
      </button>

      <div class="ui-slider-wrapper" ref="sliderWrapper">
        <div class="ui-slider-slide" :ref="`slide${index}`" v-for="(slide, index) in slides" :key="`slide` + index">
          <slot :slide="slide"></slot>
        </div>
      </div>

      <button
        type="button"
        @click="nextSlide"
        @touchstart="nextSlide"
        class="ui-slide-button ui-slide-button-next"
        :class="{ 'ui-slide-button-active': this.slideCurrent !== this.slides.length - 1 }"
      >
        <img
          :src="$options.components.arrow"
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
        v-for="(number, index) in slides"
        :key="`number-${index}`"
        @click="setSlideCurrent(index)"
        class="ui-slider-bullet"
        :class="{ 'ui-slider-bullet-active': slideCurrent === index }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import arrow from "@/lib-components/assets/icons/arrow.svg";

  export default /*#__PURE__*/ defineComponent({
    name: "TheSlider",

    data() {
      return {
        slideCurrent: 0,
        slideWidth: NaN,
      };
    },

    props: {
      slides: { type: Array, required: true },
    },

    components: { arrow },

    computed: {
      sliderWrapper: function(): HTMLElement {
        return this.$refs.sliderWrapper as HTMLElement;
      },
    },

    methods: {
      setSlideCurrent(index: number): void {
        this.sliderWrapper.style.transform = `translate3d(-${index * this.slideWidth}px, 0px, 0px)`;
        this.slideCurrent = index;
      },

      prevSlide(): void {
        if (this.slideCurrent !== 0) {
          this.slideCurrent = this.slideCurrent - 1;
          this.updateCoordinatesX();
        }
      },

      nextSlide(): void {
        if (this.slideCurrent !== this.slides.length - 1) {
          this.slideCurrent = this.slideCurrent + 1;
          this.updateCoordinatesX();
        }
      },

      updateSlideWidth(): void {
        this.slideWidth = Number(
          window.getComputedStyle(this.$refs["slide" + this.slideCurrent] as HTMLElement).width.slice(0, -2)
        );
        this.updateCoordinatesX();
      },

      updateCoordinatesX(): void {
        this.sliderWrapper.style.transform = `translate3d(-${this.slideCurrent * this.slideWidth}px, 0px, 0px)`;
      },
    },

    mounted() {
      this.slideWidth = Number(window.getComputedStyle(this.$refs.slide0 as HTMLElement).width.slice(0, -2));
      window.addEventListener("resize", this.updateSlideWidth);
    },

    beforeDestroy() {
      window.removeEventListener("resize", this.updateSlideWidth);
    },
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
