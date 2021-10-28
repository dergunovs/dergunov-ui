<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>
      <p>Вместо группы checkbox необходимо использовать компонент Multiselect.</p>
      <p class="mb-16">Тип v-model может быть boolean, string или number.</p>

      <p class="mb-16"><b>design:</b> none, switch. default: <b>none</b></p>

      <div class="flex mb-16">
        <label class="flex mr-16"><UiCheckbox v-model="checkboxBoolean" /> checkboxBoolean</label>
        <label class="flex mr-16"><UiCheckbox v-model="checkboxString" /> checkboxString</label>
        <label class="flex mr-16"><UiCheckbox v-model="checkboxNumber" /> checkboxNumber</label>
        <label class="flex"><UiCheckbox design="switch" /> design="switch"</label>
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
