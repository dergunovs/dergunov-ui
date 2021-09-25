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
          { value: 1, name: "Первый вариант" },
          { value: 2, name: "Второй вариант" },
          { value: 3, name: "Третий вариант" },
          { value: 4, name: "Четвертый вариант" },
          { value: 5, name: "Пятый вариант" },
          { value: 6, name: "Шестой вариант" },
          { value: 7, name: "Семьдой вариант" },
          { value: 8, name: "Восьмой вариант" },
          { value: 9, name: "Девятый вариант" },
        ],
        currentOptions: [],
      };
    },
  };
</script>
