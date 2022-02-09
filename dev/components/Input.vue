<template>
  <section>
    <p>Можно дополнить атрибутами инпутов, например, placeholder="test". Высота инпута равна высоте кнопки.</p>
    <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>
    <p class="mb-16">Атрибут type="tel" добавляет маску.</p>

    <UiInput v-model="regular" class="mb-8" />
    <UiInput v-model="tel" type="tel" placeholder="tel" class="mb-16" />

    <div class="flex mb-16">
      <UiInput placeholder="disabled" disabled class="mr-8" /><UiButton>Одинаковая высота</UiButton>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { UiInput, UiButton } from "@/components";
  import { ref } from "vue";

  const regular = ref("");
  const tel = ref("");
</script>

<script lang="ts">
  export default { name: "Input" };
</script>
