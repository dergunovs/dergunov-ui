<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p class="mb-16">Директива v-model добавляет компоненту input двустороннее связывание с data.</p>

      <TheTextarea v-model="test"></TheTextarea>
      <p class="mb-16">data: {{ test }}</p>
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
