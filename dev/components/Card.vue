<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <div class="mb-32">
        <p>Принимает в качестве props объект, который состоит из:</p>
        <p><b>h1:</b> заголовок записи. <b>Обязательное поле.</b></p>
        <p><b>intro:</b> вводный текст. <b>Обязательное поле.</b></p>
        <p><b>thumb:</b> ссылка на изображение. В качестве alt используется h1.</p>
        <p><b>tags:</b> массив текстовых тегов.</p>
        <p><b>theme:</b> объект, состоящий из h1 темы или родителя записи.</p>
        <p><b>views:</b> число просмотров.</p>
        <p><b>level:</b> уровень сложности в виде числа от 1 до 3.</p>
      </div>

      <h2>Блог или кейсы</h2>
      <div class="flex flex-sb flex-top flex-wrap gap-32 mb-32">
        <a
          v-for="blog in blogList"
          :key="blog.id"
          :href="blog.url"
          class="w-33-32 text-no-line color-black no-hover-color"
        >
          <TheCard :card="blog" />
        </a>
      </div>

      <h2>Wiki</h2>
      <div class="flex flex-sb flex-top flex-wrap gap-32">
        <a
          v-for="wiki in wikiList"
          :key="wiki.id"
          :href="wiki.url"
          class="w-33-32 text-no-line color-black no-hover-color"
        >
          <TheCard :card="wiki" />
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
        blogList: [
          {
            id: 1,
            thumb: "https://dergunov.com/uploads/blog/1594560715201simple-crm.jpg",
            h1: "Оптимизация сайтов в прямом эфире",
            intro: "Полезно для начинающих SEO специалистов, и людей, которые хотят разбираться в оптимизации.",
            url: "#",
            tags: ["Интернет-маркетинг"],
          },
          {
            id: 2,
            thumb: "https://dergunov.com/uploads/blog/1591449438107nuxt-example.jpg",
            h1: "30 примеров сайтов на Nuxt.js",
            intro: "Список использующих Nuxt.js и Vue.js сайтов со ссылками на проекты",
            url: "#",
            tags: ["Обучение", "Интернет-маркетинг", "Обо всём"],
          },
          {
            id: 3,
            thumb: "https://dergunov.com/uploads/blog/1590259006052new2020-2.jpg",
            h1: "Нововведения 2020",
            intro: "Перенос сайта с MODX на Nuxt.js.",
            url: "#",
            tags: ["Обо всём"],
          },
          {
            id: 4,
            thumb: "https://dergunov.com/uploads/blog/1594560715201simple-crm.jpg",
            h1: "Оптимизация сайтов в прямом эфире",
            intro: "Полезно для начинающих SEO специалистов, и людей, которые хотят разбираться в оптимизации.",
            url: "#",
            tags: ["Интернет-маркетинг"],
          },
          {
            id: 5,
            thumb: "https://dergunov.com/uploads/blog/1591449438107nuxt-example.jpg",
            h1: "30 примеров сайтов на Nuxt.js",
            intro: "Список использующих Nuxt.js и Vue.js сайтов со ссылками на проекты",
            url: "#",
            tags: ["Обучение"],
          },
          {
            id: 6,
            thumb: "https://dergunov.com/uploads/blog/1590259006052new2020-2.jpg",
            h1: "Нововведения 2020",
            intro: "Перенос сайта с MODX на Nuxt.js.",
            url: "#",
            tags: ["Обо всём"],
          },
        ],
        wikiList: [
          {
            id: 1,
            h1: "Установка Nuxt.js и подготовка IDE",
            intro: "Устанавливаем нужное ПО и плагины, загружаем проект с Github.",
            url: "#",
            theme: { h1: "Простое Nuxt.js приложение" },
            views: 1234,
            level: 1,
          },
          {
            id: 2,
            h1: "Оптимизация Nuxt.js приложения",
            intro: "Пользуемся преимуществами современных javascript фреймворков.",
            url: "#",
            theme: { h1: "Подготовка к созданию сайта" },
            views: 12345,
            level: 2,
          },
          {
            id: 3,
            h1: "Установка Nuxt.js и подготовка IDE",
            intro: "Устанавливаем нужное ПО и плагины, загружаем проект с Github.",
            url: "#",
            theme: { h1: "Простое Nuxt.js приложение" },
            views: 12,
            level: 3,
          },
          {
            id: 4,
            h1: "Установка Nuxt.js и подготовка IDE",
            intro: "Устанавливаем нужное ПО и плагины, загружаем проект с Github.",
            url: "#",
            theme: { h1: "Простое Nuxt.js приложение" },
            views: 1,
            level: 1,
          },
          {
            id: 5,
            h1: "Установка Nuxt.js и подготовка IDE",
            intro: "Устанавливаем нужное ПО и плагины, загружаем проект с Github.",
            url: "#",
            theme: { h1: "Простое Nuxt.js приложение" },
            views: 123,
            level: 2,
          },
          {
            id: 6,
            h1: "Установка Nuxt.js и подготовка IDE",
            intro: "Устанавливаем нужное ПО и плагины, загружаем проект с Github.",
            url: "#",
            theme: { h1: "Простое Nuxt.js приложение" },
            views: 1234,
            level: 3,
          },
        ],
      };
    },
  };
</script>
