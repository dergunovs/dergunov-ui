<template>
  <section>
    <h1>{{ $options.name }}</h1>

    <p class="mb-16">Директива v-model добавляет компоненту input двустороннее связывание с data.</p>

    <UiTextarea v-model="test"></UiTextarea>
    <p class="mb-16">data: {{ test }}</p>
  </section>
</template>

<script setup lang="ts">
  import { UiTextarea } from "@/components";
  import { ref } from "vue";

  const test = ref("");
</script>

<script lang="ts">
  export default { name: "Textarea" };
</script>
