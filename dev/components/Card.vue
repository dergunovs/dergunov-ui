<template>
  <div>
    <section>
      <h1>{{ $options.name }}</h1>

      <div class="mb-32">
        <p>thumbPrefix: префикс для пути до изображения thumb.</p>
        <p>Основной props - это объект, который состоит из:</p>
        <p><b>h1:</b> заголовок записи. <b>Обязательное поле.</b></p>
        <p><b>introtext:</b> вводный текст. <b>Обязательное поле.</b></p>
        <p><b>thumb:</b> ссылка на изображение. В качестве alt используется h1.</p>
        <p><b>tag:</b> текстовые теги, string или массив string.</p>
        <p><b>theme:</b> объект, состоящий из h1 темы записи.</p>
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
          <UiCard :card="blog" />
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
          <UiCard :card="wiki" />
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Card",

    data() {
      return {
        blogList: [
          {
            id: 1,
            thumb: "https://dergunov.com/uploads/blog/1594560715201simple-crm.jpg",
            h1: "Оптимизация сайтов в прямом эфире",
            introtext: "Полезно для начинающих SEO специалистов, и людей, которые хотят разбираться в оптимизации.",
            url: "#",
            tag: "Интернет-маркетинг",
          },
          {
            id: 2,
            thumb: "https://dergunov.com/uploads/blog/1591449438107nuxt-example.jpg",
            h1: "30 примеров сайтов на Nuxt.js",
            introtext: "Список использующих Nuxt.js и Vue.js сайтов со ссылками на проекты",
            url: "#",
            tag: ["Обучение", "Интернет-маркетинг", "Обо всём"],
          },
          {
            id: 3,
            thumb: "https://dergunov.com/uploads/blog/1590259006052new2020-2.jpg",
            h1: "Нововведения 2020",
            introtext: "Перенос сайта с MODX на Nuxt.js.",
            url: "#",
            tag: ["Обо всём"],
          },
          {
            id: 4,
            thumb: "https://dergunov.com/uploads/blog/1594560715201simple-crm.jpg",
            h1: "Оптимизация сайтов в прямом эфире",
            introtext: "Полезно для начинающих SEO специалистов, и людей, которые хотят разбираться в оптимизации.",
            url: "#",
            tag: ["Интернет-маркетинг"],
          },
          {
            id: 5,
            thumb: "https://dergunov.com/uploads/blog/1591449438107nuxt-example.jpg",
            h1: "30 примеров сайтов на Nuxt.js",
            introtext: "Список использующих Nuxt.js и Vue.js сайтов со ссылками на проекты",
            url: "#",
            tag: ["Обучение"],
          },
          {
            id: 6,
            thumb: "https://dergunov.com/uploads/blog/1590259006052new2020-2.jpg",
            h1: "Нововведения 2020",
            introtext: "Перенос сайта с MODX на Nuxt.js.",
            url: "#",
            tag: ["Обо всём"],
          },
        ],
        wikiList: [
          {
            id: 1,
            h1: "Установка Nuxt.js и подготовка IDE",
            introtext: "Устанавливаем нужное ПО и плагины, загружаем проект с Github.",
            url: "#",
            theme: { h1: "Простое Nuxt.js приложение" },
            views: 1234,
            level: 1,
          },
          {
            id: 2,
            h1: "Оптимизация Nuxt.js приложения",
            introtext: "Пользуемся преимуществами современных javascript фреймворков.",
            url: "#",
            theme: { h1: "Подготовка к созданию сайта" },
            views: 12345,
            level: 2,
          },
          {
            id: 3,
            h1: "Установка Nuxt.js и подготовка IDE",
            introtext: "Устанавливаем нужное ПО и плагины, загружаем проект с Github.",
            url: "#",
            theme: { h1: "Простое Nuxt.js приложение" },
            views: 12,
            level: 3,
          },
          {
            id: 4,
            h1: "Установка Nuxt.js и подготовка IDE",
            introtext: "Устанавливаем нужное ПО и плагины, загружаем проект с Github.",
            url: "#",
            views: 1,
          },
          {
            id: 5,
            h1: "Установка Nuxt.js и подготовка IDE",
            introtext: "Устанавливаем нужное ПО и плагины, загружаем проект с Github.",
            url: "#",
            views: 123,
          },
          {
            id: 6,
            h1: "Установка Nuxt.js и подготовка IDE",
            introtext: "Устанавливаем нужное ПО и плагины, загружаем проект с Github.",
            url: "#",
            views: 1234,
          },
        ],
      };
    },
  });
</script>
