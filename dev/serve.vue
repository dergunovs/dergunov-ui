<template>
  <div id="app">
    <TheH1>Header</TheH1>
    <TheH2>Header</TheH2>
    <TheH3>Header</TheH3>
    <TheButton @action="test">Текст кнопки</TheButton>
  </div>
</template>

<script>
  import Vue from "vue";

  import TheButton from "../src/lib-components/TheButton.vue";
  import TheH1 from "../src/lib-components/TheH1.vue";
  import TheH2 from "../src/lib-components/TheH2.vue";
  import TheH3 from "../src/lib-components/TheH3.vue";

  import "../src/lib-components/assets/ui-styles.css";

  export default Vue.extend({
    name: "Components",

    components: { TheButton, TheH1, TheH2, TheH3 },

    methods: {
      test() {
        console.log(1);
      },
    },
  });
</script>
