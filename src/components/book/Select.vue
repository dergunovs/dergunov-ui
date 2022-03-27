<template>
  <section>
    <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>
    <p class="mb-16">
      <b>options:</b> массив состоящий из элементов одного из следующих типов:<br />
      1. Object [{ <b>value:</b> значение, <b>name:</b> название для отображения }, ...]<br />
      2. String ["Первый","Второй","Третий"]<br />
      3. Number [1,2,3]
    </p>

    <p><UiSelect v-model="currentOption" :options="options" /></p>

    <p>currentOption: {{ currentOption }}</p>
  </section>
</template>

<script setup lang="ts">
  import { UiSelect } from "../ui";
  import { ref } from "vue";

  const currentOption = ref("");

  const options = [
    { value: 1, name: "Первый" },
    { value: 2, name: "Второй" },
    { value: 3, name: "Третий" },
  ];
</script>

<script lang="ts">
  export default { name: "Select" };
</script>
