<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Директива v-model добавляет компоненту двустороннее связывание для управления состоянием popup.</p>
      <p>При появлении фокус устанавливается на общий div popup.</p>
      <p class="mb-16">Закрыть popup: через v-model, кнопка х, esc, клик вне области.</p>

      <p class="mb-16">popup: {{ popup }}</p>

      <TheButton @ui-click="popup = true">Показать popup</TheButton>

      <ThePopup v-model="popup">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed dolor itaque incidunt molestias saepe quo
          eligendi necessitatibus magnam autem corporis sunt, placeat eaque nihil explicabo, quas ullam dignissimos
          velit. Exercitationem.
        </p>
      </ThePopup>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Popup",

    data() {
      return {
        popup: true,
      };
    },
  });
</script>
