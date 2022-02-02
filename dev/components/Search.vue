<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>
      <p>Событие search возвращает данные из строки поиска при наборе символов.</p>
      <p class="mb-16">
        <b>options:</b> массив состоящий из элементов одного из следующих типов:<br />
        1. Object [{ <b>value:</b> значение, <b>name:</b> название для отображения }, ...]<br />
        2. String ["Первый","Второй","Третий"]<br />
        3. Number [1,2,3]
      </p>

      <p class="w-25"><UiSearch v-model="currentOption" :options="options" @search="updateOptions" /></p>

      <p>currentOption: {{ currentOption }}</p>
      <p>searchQuery: {{ searchQuery }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { UiSearch } from "@/components";
  import { ref } from "vue";

  const currentOption = ref("");
  const searchQuery = ref("");

  const options = ref([
    { value: 1, name: "Первый" },
    { value: 2, name: "Второй" },
    { value: 3, name: "Третий" },
  ]);

  function updateOptions(query: string) {
    searchQuery.value = query;
  }
</script>

<script lang="ts">
  export default { name: "Search" };
</script>
