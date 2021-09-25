<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Можно дополнить атрибутами инпутов, например, placeholder="test". Высота инпута равна высоте кнопки.</p>
      <p>Директива v-model добавляет компоненту двустороннее связывание с data.</p>
      <p class="mb-16">Атрибут type="tel" добавляет маску.</p>

      <p><TheInput v-model="regular" /> data: {{ regular }}</p>

      <p class="mb-16">
        <TheInput type="password" placeholder="password" class="mr-8" />
        <TheInput type="number" placeholder="number" class="mr-8" />
        <TheInput type="tel" placeholder="tel" v-model="tel" />
      </p>

      <div class="flex mb-16">
        <TheInput placeholder="disabled" disabled class="mr-8" /> <TheButton>Одинаковая высота</TheButton>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Input",

    data() {
      return {
        regular: "",
        tel: "",
      };
    },
  };
</script>
