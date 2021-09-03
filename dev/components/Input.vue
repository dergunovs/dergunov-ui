<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p><b>type:</b> text, password, email, search, tel, url. default: <b>text</b></p>
      <p class="mb-16"><b>fit:</b> regular, grow. default: <b>regular</b></p>

      <p>Можно дополнить атрибутами текстовых инпутов, например, placeholder="test".</p>
      <p>Директива v-model добавляет компоненту input двустороннее связывание с data.</p>

      <p><TheInput v-model="regular" /> data: {{ regular }}</p>
      <p><TheInput v-model="grow" fit="grow" placeholder="fit='grow'" /></p>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Input",

    data() {
      return {
        regular: "",
        grow: "",
      };
    },
  };
</script>
