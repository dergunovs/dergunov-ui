<template>
  <section>
    <h1>Глобальная установка в Nuxt.js</h1>
    <TheList>
      <li>Установить пакет:</li>
      <TheCode>npm i dergunov-ui</TheCode>

      <li>Создать файл ui.js в папке /plugins/</li>

      <li>Внутри ui.js прописать:</li>
      <TheCode>
        <pre>
import Vue from "vue";
import ui from "dergunov-ui";
Vue.use(ui);</pre
        >
      </TheCode>

      <li>В nuxt.config.js подключить плагин:</li>
      <TheCode>plugins: [ { src: "~plugins/ui" } ]</TheCode>
      <TheCode>build: { transpile: ["dergunov-ui"] }</TheCode>

      <h2>CSS</h2>
      <p>
        Опционально можно подключить общие стили и утилитарные классы. В самом начале вашего css файла допишите:
      </p>
      <TheCode>@import "dergunov-ui";</TheCode>
      <p>
        Внутри компонентов данные стили не используются, то есть подключать css из библиотеки компонентов не
        обязательно.
      </p>
      <p>
        Если общие стили не подключены то в вашем css файле необходимо прописать переменные. Ниже представлены их
        значения по-умолчанию.
      </p>

      <TheCode>
        <pre>
:root {
  --color-primary: #ff5050;
  --color-primary-dark: #ed0d0d;
  --color-primary-light: #db9090;

  --color-black: #000;
  --color-gray-dark: #333;
  --color-gray: #ccc;
  --color-gray-light: #eee;
  --color-white: #fff;
}</pre
        >
      </TheCode>
    </TheList>
  </section>
</template>

<script>
  export default {
    name: "Readme",
  };
</script>

<style></style>
