<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>Форма загрузки файлов возвращает через v-model объект DataTrasfer со списком файлов для загрузки.</p>
      <p>Поддерживается загрузка нескольких файлов с помощью props <b>multiple</b>.</p>
      <p>Файлы для загрузки можно удалять. Если файлов несколько, то выводтся их общий размер и количество.</p>

      <p class="mb-32"><b>multiple:</b> boolean</p>

      <UiUpload multiple />
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Upload",
  });
</script>
