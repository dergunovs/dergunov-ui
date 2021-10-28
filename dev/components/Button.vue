<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p><b>fit:</b> regular, grow. default: <b>regular</b></p>
      <p><b>design:</b> regular, none. default: <b>regular</b></p>
      <p><b>disabled:</b> Boolean. default: <b>false</b></p>
      <p class="mb-16"><b>active:</b> Boolean. default: <b>false</b></p>

      <div class="mb-16"><UiButton fit="regular">fit: regular, design: regular</UiButton></div>
      <div class="mb-16"><UiButton fit="regular" active>fit: regular, active: true</UiButton></div>
      <div class="mb-16"><UiButton fit="grow">fit: grow</UiButton></div>

      <div><UiButton design="none">design: none</UiButton></div>
      <div class="mb-16"><UiButton design="none" active>design: none, active: true</UiButton></div>

      <UiButton><UiIcon title="arrow" type="inverted" class="mr-8" />TheIcon внутри TheButton</UiButton>

      <h2>Actions</h2>
      <div>
        @ui-click: <UiButton @ui-click="TheButtonClick">clicks: {{ clickCount }}</UiButton>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Button",

    data() {
      return {
        clickCount: 0,
      };
    },

    methods: {
      TheButtonClick() {
        this.clickCount++;
      },
    },
  });
</script>
