<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>
      <p class="mb-16">
        <b>options:</b> массив состоящий из элементов одного из следующих типов:<br />
        1. Object [{ <b>value:</b> значение, <b>name:</b> название для отображения }, ...]<br />
        2. String ["Первый","Второй","Третий"]<br />
        3. Number [1,2,3]
      </p>

      <p><UiMultiselect v-model="currentOptions" :options="options" /></p>

      <p>currentOptions: {{ currentOptions }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { UiMultiselect } from "@/components";
  import { ref } from "vue";

  const currentOptions = ref([]);

  const options = [
    { value: 1, name: "Первый вариант" },
    { value: 2, name: "Второй вариант" },
    { value: 3, name: "Третий вариант" },
    { value: 4, name: "Четвертый вариант" },
    { value: 5, name: "Пятый вариант" },
    { value: 6, name: "Шестой вариант" },
    { value: 7, name: "Семьдой вариант" },
    { value: 8, name: "Восьмой вариант" },
    { value: 9, name: "Девятый вариант" },
  ];
</script>

<script lang="ts">
  export default { name: "Multiselect" };
</script>
