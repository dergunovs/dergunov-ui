<template>
  <section>
    <h1>{{ $options.name }}</h1>

    <p>Директива v-model добавляет компоненту двустороннее связывание для управления состоянием popup.</p>
    <p>При появлении фокус устанавливается на общий div popup.</p>
    <p class="mb-16">Закрыть popup: через v-model, кнопка х, esc, клик вне области.</p>

    <p class="mb-16">popup: {{ isShow }}</p>

    <UiButton @click="isShow = true">Показать popup</UiButton>

    <UiPopup v-model="isShow">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed dolor itaque incidunt molestias saepe quo eligendi
        necessitatibus magnam autem corporis sunt, placeat eaque nihil explicabo.
      </p>
    </UiPopup>
  </section>
</template>

<script setup lang="ts">
  import { UiPopup, UiButton } from "@/components";
  import { ref } from "vue";

  const isShow = ref(true);
</script>

<script lang="ts">
  export default { name: "Popup" };
</script>
