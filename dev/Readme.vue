<template>
  <section>
    <h1>Глобальная установка в Nuxt3</h1>
    <TheList>
      <li>Установить пакет:</li>
      <TheCode>npm i dergunov-ui</TheCode>

      <li>Создать файл ui.js в папке /plugins/</li>

      <li>Внутри ui.js прописать:</li>
      <TheCode>
        <pre>
import { defineNuxtPlugin } from "#app";
import ui from "dergunov-ui";
import "dergunov-ui/dist/assets/styles.css";

export default defineNuxtPlugin((nuxtApp) => nuxtApp.vueApp.use(ui));</pre
        >
      </TheCode>

      <h2>CSS</h2>
      <p>В библиотеку компонентов встроены утилитарные классы. Внутри компонентов они не используются.</p>
      <p>Компоненты используют предопределенные цвета через var(). Вы можете их переназначить в своём css.</p>
      <p><b>Цвета по-умолчанию:</b></p>
      <TheCode>
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
      </TheCode>
    </TheList>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "Readme",
  });
</script>

<style></style>
