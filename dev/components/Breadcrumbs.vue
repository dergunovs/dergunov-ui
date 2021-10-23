<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <TheBreadcrumbs :linkType="NuxtLink" :pathUrl="pathUrl" :pathTitles="pathTitles" />
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Breadcrumbs",

    data() {
      return {
        pathUrl: "/uslugi/seo",
        pathTitles: ["Главная", "Услуги", "SEO"],
      };
    },
  });
</script>
