<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p><b>fit:</b> regular, grow. default: <b>regular</b></p>
      <p><b>design:</b> regular, none. default: <b>regular</b></p>
      <p class="mb-16"><b>active:</b> true, false. default: <b>false</b></p>

      <div class="mb-16"><TheButton fit="regular">fit: regular, design: regular</TheButton></div>
      <div class="mb-16"><TheButton fit="regular" active>fit: regular, active: true</TheButton></div>
      <div class="mb-16"><TheButton fit="grow">fit: grow</TheButton></div>

      <div class="mb-16"><TheButton design="none">design: none</TheButton></div>
      <div class="mb-16"><TheButton design="none" active>design: none, active: true</TheButton></div>

      <TheButton><TheIcon title="download" type="inverted" class="mr-8" />TheIcon внутри TheButton</TheButton>

      <h2>Actions</h2>
      <div>
        @ui-click: <TheButton @ui-click="TheButtonClick">clicks: {{ clickCount }}</TheButton>
      </div>
    </section>
  </div>
</template>

<script>
  import TheButton from "@/lib-components/TheButton.vue";
  import TheIcon from "@/lib-components/TheIcon.vue";

  export default {
    name: "Button",

    data() {
      return {
        clickCount: 0,
      };
    },

    components: { TheButton, TheIcon },

    methods: {
      TheButtonClick() {
        this.clickCount++;
      },
    },
  };
</script>
