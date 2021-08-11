<script>
  import Vue from "vue";
  import DButton from "../src/lib-components/button.vue";

  export default Vue.extend({
    components: { DButton },
    name: "ServeDev",
  });
</script>

<template>
  <div id="app">
    <d-button>Текст кнопки</d-button>
  </div>
</template>
