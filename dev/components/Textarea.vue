<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p class="mb-16"><b>fit:</b> regular, grow. default: <b>regular</b></p>

      <p class="mb-16">Директива v-model добавляет компоненту input двустороннее связывание с data.</p>

      <TheTextarea v-model="test"></TheTextarea>
      <p class="mb-16">data: {{ test }}</p>

      <TheTextarea fit="grow" placeholder="'fit=grow'"></TheTextarea>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Textarea",

    data() {
      return {
        test: "",
      };
    },
  };
</script>
