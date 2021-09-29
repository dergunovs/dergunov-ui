<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p class="mb-16">Директива v-model добавляет компоненту input двустороннее связывание с data.</p>

      <TheTextarea v-model="test"></TheTextarea>
      <p class="mb-16">data: {{ test }}</p>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Textarea",

    data() {
      return {
        test: "",
      };
    },
  });
</script>
