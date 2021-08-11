<template>
  <div id="app">
    <DHeader>
      <DButton @action="test">Текст кнопки</DButton>
    </DHeader>
  </div>
</template>

<script>
  import Vue from "vue";
  import DButton from "../src/lib-components/button.vue";
  import DHeader from "../src/lib-components/header.vue";

  export default Vue.extend({
    name: "ServeDev",
    components: { DButton, DHeader },
    methods: {
      test() {
        console.log(1);
      },
    },
  });
</script>
