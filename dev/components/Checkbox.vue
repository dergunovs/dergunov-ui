<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p class="mb-16">Директива v-model добавляет компоненту двустороннее связывание с data.</p>

      <TheCheckbox v-model="checkbox" />
      <p>checkbox: {{ checkbox }}</p>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Checkbox",

    data() {
      return { checkbox: true };
    },
  });
</script>
