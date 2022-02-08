<template>
  <section>
    <h1>{{ $options.name }}</h1>

    <p>В Nuxt и Vue Router разные компоненты ссылок: NuxtLink и RouterLink.</p>

    <p><b>linkType (component):</b> NuxtLink, RouterLink</p>
    <p><b>pathUrl (string):</b> относительный путь текущей страницы, например, "/blog/examples/first"</p>
    <p class="mb-16">
      <b>pathTitles (array):</b> список заголовков для ссылок ["Главная", "Блог", "Примеры", "Первый"]
    </p>

    <UiBreadcrumbs linkType="a" :pathUrl="pathUrl" :pathTitles="pathTitles" />
  </section>
</template>

<script setup lang="ts">
  import { UiBreadcrumbs } from "@/components";

  const pathUrl = "/blog/examples/first";
  const pathTitles = ["Главная", "Блог", "Примеры", "Первый"];
</script>

<script lang="ts">
  export default { name: "Breadcrumbs" };
</script>
