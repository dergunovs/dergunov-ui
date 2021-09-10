<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p class="mb-16"><b>fit:</b> regular, grow. default: <b>regular</b></p>

      <p>
        Можно дополнить атрибутами текстовых инпутов, например, placeholder="test". Высота инпута равна высоте кнопки.
      </p>
      <p>Директива v-model добавляет компоненту input двустороннее связывание с data.</p>

      <p><TheInput v-model="regular" /> data: {{ regular }}</p>
      <p><TheInput fit="grow" placeholder="fit='grow'" /></p>

      <p class="mb-16">
        <TheInput type="password" placeholder="password" class="mr-8" />
        <TheInput type="email" placeholder="email" class="mr-8" />
        <TheInput type="search" placeholder="search" class="mr-8" />
        <TheInput type="tel" placeholder="tel" />
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
      };
    },
  };
</script>
