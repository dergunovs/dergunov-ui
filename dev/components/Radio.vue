<template>
  <section>
    <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>

    <p><b>direction:</b> column, row. default: <b>column</b></p>
    <p><b>design:</b> none, buttons. default: <b>none</b></p>
    <p class="mb-16">
      <b>options:</b> массив состоящий из элементов одного из следующих типов:<br />
      1. Object [{ <b>value:</b> значение, <b>name:</b> название для отображения }, ...]<br />
      2. String ["Первый","Второй","Третий"]<br />
      3. Number [1,2,3]
    </p>

    <div class="flex mb-8">
      <UiRadio v-model="radioObject" :options="radioObjectOptions" />
    </div>
    <p class="mb-32">radioObject: {{ radioObject }}</p>

    <div class="flex mb-8">
      <UiRadio v-model="radioStringRow" :options="radioStringRowOptions" direction="row" />
    </div>
    <p class="mb-32">radioStringRow: {{ radioStringRow }}</p>

    <div class="flex mb-8">
      <UiRadio v-model="radioButtons" :options="radioStringRowOptions" direction="row" design="buttons" />
    </div>
    <p>design="buttons": {{ radioButtons }}</p>
  </section>
</template>

<script setup lang="ts">
  import { UiRadio } from "@/components";
  import { ref } from "vue";

  const radioObject = ref("");
  const radioStringRow = ref("");
  const radioButtons = ref("");

  const radioObjectOptions = [
    { value: 1, name: "Первый" },
    { value: 2, name: "Второй" },
    { value: 3, name: "Третий" },
  ];
  const radioStringRowOptions = ["Отлично", "Хорошо", "Плохо"];
</script>

<script lang="ts">
  export default { name: "Radio" };
</script>
