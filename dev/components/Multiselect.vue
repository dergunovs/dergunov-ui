<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>
      <p class="mb-16"><b>options:</b> массив объектов [{ value: значение, name: название для отображения }, ...]</p>

      <p>currentOption: {{ currentOptions }}</p>
      <p><TheMultiselect v-model="currentOptions" :options="options" /></p>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Multiselect",

    data() {
      return {
        options: [
          { value: 1, name: "Первый" },
          { value: 2, name: "Второй" },
          { value: 3, name: "Третий" },
        ],
        currentOptions: [],
      };
    },
  };
</script>
