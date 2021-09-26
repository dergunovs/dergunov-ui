<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>
      <p class="mb-16">
        <b>options:</b> массив состоящий из элементов одного из следующих типов:<br />
        1. Object [{ value: значение, name: название для отображения }, ...]<br />
        2. String ["Первый","Второй","Третий"]<br />
        3. Number [1,2,3]
      </p>

      <p><TheSelect v-model="currentOption" :options="optionsTypeObject" /></p>
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
        currentOption: "",
      };
    },
  };
</script>
