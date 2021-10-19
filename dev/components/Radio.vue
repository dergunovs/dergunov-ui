<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>

      <p><b>direction:</b> column, row. default: <b>column</b></p>
      <p class="mb-16">
        <b>options:</b> массив состоящий из элементов одного из следующих типов:<br />
        1. Object [{ <b>value:</b> значение, <b>name:</b> название для отображения }, ...]<br />
        2. String ["Первый","Второй","Третий"]<br />
        3. Number [1,2,3]
      </p>

      <div class="flex mb-16">
        <TheRadio v-model="radioObject" :options="radioObjectOptions" />
      </div>

      <p>radioObject: {{ radioObject }}</p>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Radio",

    data() {
      return {
        radioObject: "",
        radioObjectOptions: [
          { value: 1, name: "Первый" },
          { value: 2, name: "Второй" },
          { value: 3, name: "Третий" },
        ],
      };
    },
  });
</script>
