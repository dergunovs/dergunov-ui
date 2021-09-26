<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>
      <p class="mb-16">
        <b>options:</b> массив объектов <b>или</b> массив из текстовых полей<br />
        1. Объект [{ value: значение, name: название для отображения }, ...]<br />
        2. Текст ["Первый","Второй","Третий"]
      </p>

      <p><TheSelect v-model="currentOption" :options="optionsTypeString" /></p>
      <p>currentOption: {{ currentOption }}</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Select",

    data() {
      return {
        optionsTypeObject: [
          { value: 1, name: "Первый" },
          { value: 2, name: "Второй" },
          { value: 3, name: "Третий" },
        ],
        optionsTypeString: ["Первый", "Второй", "Третий"],
        currentOption: "Второй",
      };
    },
  };
</script>
