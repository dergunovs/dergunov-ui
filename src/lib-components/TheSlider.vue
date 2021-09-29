<template>
  <div>
    <div class="ui-slider-container" @mousedown="slideSwipe" @touchstart="slideSwipe">
      <div class="ui-slider-wrapper" ref="sliderWrapper">
        <div
          class="ui-slider-slide"
          :ref="`slide${index}`"
          v-for="(slide, index) in slides"
          :key="`client` + index"
          :class="{ 'ui-slider-slide-active': slideCurrent === index }"
        >
          <slot :slide="slide"></slot>
        </div>
      </div>
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

    methods: {
      setSlideCurrent(index: number) {
        (this.$refs.sliderWrapper as HTMLElement).style.transform = `translate3d(-${index *
          this.slideWidth}px, 0px, 0px)`;
        this.slideCurrent = index;
      },
      slideSwipe(e: MouseEvent) {
        let slideClickZone = e.offsetX / this.slideWidth;

        if (slideClickZone < 0.2 && this.slideCurrent !== 0) {
          this.prevSlide();
        }
        if (slideClickZone > 0.8 && this.slideCurrent !== this.slides.length - 1) {
          this.nextSlide();
        }
      },
      nextSlide() {
        this.slideCurrent = this.slideCurrent + 1;
        this.updateCoordinatesX();
      },
      prevSlide() {
        this.slideCurrent = this.slideCurrent - 1;
        this.updateCoordinatesX();
      },
      updateSlideWidth() {
        this.slideWidth = (this.$refs["slide" + this.slideCurrent] as HTMLElement).offsetWidth;
        this.updateCoordinatesX();
      },
      updateCoordinatesX() {
        (this.$refs.sliderWrapper as HTMLElement).style.transform = `translate3d(-${this.slideCurrent *
          this.slideWidth}px, 0px, 0px)`;
      },
    },

    mounted() {
      this.slideWidth = (this.$refs.slide0 as HTMLElement).offsetWidth;
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
  .ui-slider-slide {
    width: 100%;
    position: relative;
    transition-property: transform;
    flex-shrink: 0;
    transition-duration: 600ms;
    z-index: 1;
    pointer-events: none;
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
