<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <div class="mb-32">
        <p>Принимает в качестве props объект, который состоит из:</p>
        <p><b>title:</b> заголовок. Обязательное поле.</p>
        <p><b>description:</b> описание. Обязательное поле.</p>
        <p><b>image:</b> ссылка на изображение. В качестве alt используется title.</p>
        <p><b>tags:</b> массив текстовых тегов.</p>
      </div>

      <div class="flex flex-sb flex-top flex-wrap gap-32">
        <a
          v-for="blog in blogs"
          :key="blog.id"
          :href="blog.url"
          class="w-33-32 text-no-line no-hover-color color-black"
        >
          <TheCard :card="blog" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Card",

    data() {
      return {
        blogs: [
          {
            id: 1,
            image: "https://dergunov.com/uploads/blog/1594560715201simple-crm.jpg",
            title: "Оптимизация сайтов в прямом эфире",
            description: "Полезно для начинающих SEO специалистов, и людей, которые хотят разбираться в оптимизации.",
            tags: ["Интернет-маркетинг"],
            url: "#",
          },
          {
            id: 2,
            image: "https://dergunov.com/uploads/blog/1591449438107nuxt-example.jpg",
            title: "30 примеров сайтов на Nuxt.js",
            description: "Список использующих Nuxt.js и Vue.js сайтов со ссылками на проекты",
            tags: ["Обучение", "Интернет-маркетинг", "Обо всём"],
            url: "#",
          },
          {
            id: 3,
            image: "https://dergunov.com/uploads/blog/1590259006052new2020-2.jpg",
            title: "Нововведения 2020",
            description: "Перенос сайта с MODX на Nuxt.js.",
            tags: ["Обо всём"],
            url: "#",
          },
          {
            id: 4,
            image: "https://dergunov.com/uploads/blog/1594560715201simple-crm.jpg",
            title: "Оптимизация сайтов в прямом эфире",
            description: "Полезно для начинающих SEO специалистов, и людей, которые хотят разбираться в оптимизации.",
            tags: ["Интернет-маркетинг"],
            url: "#",
          },
          {
            id: 5,
            image: "https://dergunov.com/uploads/blog/1591449438107nuxt-example.jpg",
            title: "30 примеров сайтов на Nuxt.js",
            description: "Список использующих Nuxt.js и Vue.js сайтов со ссылками на проекты",
            tags: ["Обучение"],
            url: "#",
          },
          {
            id: 6,
            image: "https://dergunov.com/uploads/blog/1590259006052new2020-2.jpg",
            title: "Нововведения 2020",
            description: "Перенос сайта с MODX на Nuxt.js.",
            tags: ["Обо всём"],
            url: "#",
          },
        ],
      };
    },
  };
</script>
