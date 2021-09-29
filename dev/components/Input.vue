<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Можно дополнить атрибутами инпутов, например, placeholder="test". Высота инпута равна высоте кнопки.</p>
      <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>
      <p class="mb-16">Атрибут type="tel" добавляет маску.</p>

      <TheInput v-model="regular" class="mb-8" />
      <p>data: {{ regular }}</p>

      <div class="flex mb-16">
        <TheInput type="password" placeholder="password" class="mr-8" />
        <TheInput type="number" placeholder="number" class="mr-8" />
        <TheInput type="tel" placeholder="tel" v-model="tel" />
      </div>

      <div class="flex mb-16">
        <TheInput placeholder="disabled" disabled class="mr-8" /> <TheButton>Одинаковая высота</TheButton>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Input",

    data() {
      return {
        regular: "",
        tel: "",
      };
    },
  });
</script>
