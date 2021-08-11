<script>
  import Vue from "vue";
  import DButton from "../src/lib-components/button.vue";
  import DHeader from "../src/lib-components/header.vue";

  export default Vue.extend({
    components: { DButton, DHeader },
    name: "ServeDev",
  });
</script>

<template>
  <div id="app">
    <DHeader>
      <DButton>Текст кнопки</DButton>
    </DHeader>
  </div>
</template>
