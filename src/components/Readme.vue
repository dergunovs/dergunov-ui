<template>
  <section>
    <p>Библиотека компонентов для Vue 3. Zero Dependencies. Code Splitting.</p>
    <p>22 компонента занимают <b>11 кб</b> (gzip) в бандле вашего приложения. <b>4 кб</b> (gzip) занимает весь CSS.</p>
    <p>Компоненты нужно использовать с префиксом Ui. Например, UiForm или UiTable.</p>

    <p>
      Полезные ссылки:
      <a href="https://github.com/dergunovs/dergunov-ui" target="_blank" class="mr-8">Github</a>
      <a href="https://www.npmjs.com/package/dergunov-ui" target="_blank" class="mr-8">NPM</a>
      <a href="https://www.youtube.com/playlist?list=PLOICX-WjKEZcZ4EZsp_xNQ_stjGRyIUDx" target="_blank" class="mr-8"
        >Youtube</a
      >
      <a href="mailto:a@dergunov.com">Email</a>
    </p>

    <p>
      Code Splitting поддерживался до версии 0.5.17 (Vue-CLI 5 + кастомный билд на Rollup). Начиная с версии 0.6.0
      используется Vite + Library mode. Поддержка Code Splitting временно приостановлена, так как в Vite на текущий
      момент в качестве rollup.input может использоваться только один файл.
    </p>

    <h2>Установка</h2>
    <UiCode>npm i dergunov-ui</UiCode>

    <h2>Использование</h2>
    <p>Импортируйте необходимые компоненты из библотеки в своём приложении.</p>

    <UiCode>
      <pre>
&lt;template&gt;
  &lt;UiButton&gt;Кнопка&lt;/UiButton&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { UiButton } from "dergunov-ui"
&lt;/script&gt;
</pre
      >
    </UiCode>

    <h2>CSS</h2>
    <p>В своём css файле или секции style корневого компонента подключите общие стили библиотеки:</p>

    <UiCode>
      <pre>@import "dergunov-ui";</pre>
    </UiCode>

    <p>В библиотеку компонентов встроены утилитарные классы. Внутри компонентов они не используются.</p>
    <p>Компоненты используют предопределенные цвета через var(). Вы можете их переназначить в своём css.</p>
    <p><b>Цвета по-умолчанию:</b></p>
    <UiCode>
      <pre>
:root {
  --color-primary: #111bbb;
  --color-primary-dark: #0f0f66;
  --color-primary-light: #7b99db;

  --color-success: #3aa636;
  --color-success-dark: #20811d;
  --color-error: #cb0000;
  --color-error-dark: #830a0a;

  --color-black: #000;
  --color-gray-dark: #444;
  --color-gray: #ccc;
  --color-gray-light: #eee;
  --color-white: #fff;
}</pre
      >
    </UiCode>
  </section>
</template>

<script setup lang="ts">
  import { UiCode } from "./ui";
</script>

<script lang="ts">
  export default { name: "Библиотека компонентов" };
</script>
