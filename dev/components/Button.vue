<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p><b>fit:</b> regular, grow. default: <b>regular</b></p>
      <p><b>design:</b> regular, none. default: <b>regular</b></p>
      <p><b>disabled:</b> Boolean. default: <b>false</b></p>
      <p class="mb-16"><b>active:</b> Boolean. default: <b>false</b></p>

      <div class="mb-16"><TheButton fit="regular">fit: regular, design: regular</TheButton></div>
      <div class="mb-16"><TheButton fit="regular" active>fit: regular, active: true</TheButton></div>
      <div class="mb-16"><TheButton fit="grow">fit: grow</TheButton></div>

      <div><TheButton design="none">design: none</TheButton></div>
      <div class="mb-16"><TheButton design="none" active>design: none, active: true</TheButton></div>

      <TheButton><TheIcon title="youtube" type="inverted" class="mr-8" />TheIcon внутри TheButton</TheButton>

      <h2>Actions</h2>
      <div>
        @ui-click: <TheButton @ui-click="TheButtonClick">clicks: {{ clickCount }}</TheButton>
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
