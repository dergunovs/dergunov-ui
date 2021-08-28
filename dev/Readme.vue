<template>
  <section>
    <h1>Установка в Nuxt.js</h1>
    <TheList>
      <li>Установить пакет:</li>
      <pre>npm i dergunov-ui</pre>

      <li>Создать файл ui.js в папке /plugins/</li>

      <li>Внутри ui.js прописать:</li>
      <pre>
import Vue from "vue";
import ui from "dergunov-ui";
Vue.use(ui);</pre
      >

      <li>В nuxt.config.js подключить плагин:</li>
      <pre>
plugins: [ { src: "~plugins/ui" } ]
build: { transpile: ["dergunov-ui"] }</pre
      >

      <h2>CSS</h2>
      <p>
        Опционально можно подключить общие стили и утилитарные классы. В самом начале вашего css файла допишите:
      </p>
      <pre>@import "dergunov-ui";</pre>
      <p>
        Внутри компонентов данные стили не используются, то есть подключать css из библиотеки компонентов не
        обязательно.
      </p>
      <p>
        Если общие стили не подключены то в вашем css файле необходимо прописать переменные. Ниже представлены их
        значения по-умолчанию.
      </p>

      <pre>
:root {
--color-primary: #ff5050;
--color-primary-dark: #ed0d0d;
--color-primary-light: #db9090;

--color-black: #000;
--color-gray-dark: #444;
--color-gray: #888;
--color-gray-light: #ddd;
--color-white: #fff;
}</pre
      >
    </TheList>
  </section>
</template>

<script>
  export default {
    name: "Readme",
  };
</script>

<style></style>
