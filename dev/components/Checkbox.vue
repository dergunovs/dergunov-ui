<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>
      <p class="mb-16">Тип v-model может быть boolean, string или number.</p>

      <div class="flex mb-16">
        <label class="mr-16"><TheCheckbox v-model="checkboxBoolean" /> checkboxBoolean</label>
        <label class="mr-16"><TheCheckbox v-model="checkboxString" /> checkboxString</label>
        <label><TheCheckbox v-model="checkboxNumber" /> checkboxNumber</label>
      </div>

      <p>checkboxBoolean: {{ checkboxBoolean }}</p>
      <p>checkboxString: {{ checkboxString }}</p>
      <p>checkboxNumber: {{ checkboxNumber }}</p>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Checkbox",

    data() {
      return {
        checkboxBoolean: false,
        checkboxString: "Текст",
        checkboxNumber: 1,
      };
    },
  });
</script>
