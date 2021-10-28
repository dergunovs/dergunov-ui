<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <p>В Nuxt и Vue разные названия компонентов ссылок: NuxtLink и RouterLink.</p>

      <p><b>linkType (string):</b> NuxtLink, RouterLink</p>
      <p><b>pathUrl (string):</b> относительный путь текущей страницы, например, "/blog/examples/first"</p>
      <p class="mb-16">
        <b>pathTitles (array):</b> список заголовков для ссылок ["Главная", "Блог", "Примеры", "Первый"]
      </p>

      <UiBreadcrumbs linkType="a" :pathUrl="pathUrl" :pathTitles="pathTitles" />
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Breadcrumbs",

    data() {
      return {
        pathUrl: "/blog/examples/first",
        pathTitles: ["Главная", "Блог", "Примеры", "Первый"],
      };
    },
  });
</script>
