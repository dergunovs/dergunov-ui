<template>
  <section>
    <h1>Библиотека компонентов</h1>

    <p>Библиотека компонентов на основе vue-sfc-rollup для Nuxt3 (в дальшейшем будет поддержка Vue CLI 5).</p>
    <p>22 компонента занимают <b>10 кб</b> (gzip) в бандле вашего приложения. <b>5 кб</b> занимает весь CSS.</p>
    <p>
      Полезные ссылки:
      <a href="https://github.com/dergunovs/dergunov-ui" target="_blank" class="mr-8">Github</a>
      <a href="https://www.youtube.com/playlist?list=PLOICX-WjKEZcZ4EZsp_xNQ_stjGRyIUDx" target="_blank" class="mr-8"
        >Youtube</a
      >
      <a href="mailto:a@dergunov.com">Email</a>
    </p>

    <h2>Глобальная установка в Nuxt3</h2>
    <UiList>
      <li>Установить пакет:</li>
      <UiCode>npm i dergunov-ui</UiCode>

      <li>Создать файл ui.js в папке /plugins/</li>

      <li>Внутри ui.js прописать:</li>
      <UiCode>
        <pre>
import { defineNuxtPlugin } from "#app";
import ui from "dergunov-ui";
import "dergunov-ui/dist/assets/styles.css";

export default defineNuxtPlugin((nuxtApp) => nuxtApp.vueApp.use(ui));</pre
        >
      </UiCode>

      <h2>CSS</h2>
      <p>В библиотеку компонентов встроены утилитарные классы. Внутри компонентов они не используются.</p>
      <p>Компоненты используют предопределенные цвета через var(). Вы можете их переназначить в своём css.</p>
      <p><b>Цвета по-умолчанию:</b></p>
      <UiCode>
        <pre>
:root {
  --color-primary: #ff5050;
  --color-primary-dark: #ed0d0d;
  --color-primary-light: #db9090;

  --color-success: #3aa636;
  --color-error: #cb0000;

  --color-black: #000;
  --color-gray-dark: #444;
  --color-gray: #ccc;
  --color-gray-light: #eee;
  --color-white: #fff;
}</pre
        >
      </UiCode>
    </UiList>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Readme",
  });
</script>

<style></style>
