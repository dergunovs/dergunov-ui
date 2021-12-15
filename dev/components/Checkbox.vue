<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>
      <p>Вместо группы checkbox необходимо использовать компонент Multiselect.</p>
      <p class="mb-16">Тип v-model может быть boolean, string или number.</p>

      <p class="mb-16"><b>design:</b> none, switch. default: <b>none</b></p>

      <div class="flex mb-16">
        <label class="flex mr-16"><UiCheckbox v-model="boolean" />boolean</label>
        <label class="flex mr-16"><UiCheckbox v-model="string" />string</label>
        <label class="flex mr-16"><UiCheckbox v-model="number" />number</label>
        <label class="flex"><UiCheckbox design="switch" />design="switch"</label>
      </div>

      <p>boolean: {{ boolean }}</p>
      <p>string: {{ string }}</p>
      <p>number: {{ number }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { UiCheckbox } from "@/components";
  import { ref } from "vue";

  const boolean = ref(false);
  const string = ref("Текст");
  const number = ref(1);
</script>

<script lang="ts">
  export default { name: "Checkbox" };
</script>
