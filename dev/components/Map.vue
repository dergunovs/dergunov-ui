<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p><b>src:</b> ссылка из iframe, которые генерирует конструктор карт Яндекса или Гугла</p>
      <p><b>height:</b> высота карты в пикселях. default: <b>400</b></p>
      <p class="mb-16"><b>title:</b> название карты. default: <b>Схема проезда</b></p>

      <TheMap
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A469dd4dfffe647c705097536f6f4323807e8aea5ece98755dff2ffc7bdc3823c&amp;source=constructor"
      />
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Map",
  });
</script>
