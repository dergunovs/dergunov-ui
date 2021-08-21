<template>
  <section>
    <h1>Кнопка</h1>
    <TheButton @ui-click="TheButtonClick">Текст кнопки</TheButton>
  </section>
</template>

<script>
  import TheButton from "@/lib-components/TheButton.vue";

  export default {
    name: "ButtonList",

    components: { TheButton },

    methods: {
      TheButtonClick() {
        console.log("TheButtonClick");
      },
    },
  };
</script>

<style></style>
